import { createReadStream, existsSync, readFileSync } from "node:fs";
import { mkdir, readFile, stat } from "node:fs/promises";
import { createServer } from "node:http";
import https from "node:https";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const serverDir = path.join(rootDir, "server");
const sessions = new Map();
const orders = new Map();

loadEnvFile(path.join(rootDir, ".env"));

const port = Number(process.env.PORT || 3000);
const sessionSecret = process.env.SESSION_SECRET || "development-only-change-me";
const sessionCookie = "mjolnir_admin_session";
const sessionMaxAgeSeconds = Number(process.env.SESSION_MAX_AGE_SECONDS || 60 * 60 * 8);
const mockEnabled = process.env.BANKID_MOCK_ENABLED === "true";

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
  [".ico", "image/x-icon"]
]);

await mkdir(serverDir, { recursive: true });

const server = createServer(async (request, response) => {
  try {
    addSecurityHeaders(response);

    const url = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);

    if (url.pathname.startsWith("/api/")) {
      await handleApi(request, response, url);
      return;
    }

    await serveStatic(request, response, url);
  } catch (error) {
    console.error(error);
    sendJson(response, 500, { message: "Servern kunde inte slutföra begäran." });
  }
});

server.listen(port, () => {
  console.log(`Mjölnir server körs på http://localhost:${port}`);
  if (mockEnabled) {
    console.log("BankID mockläge är aktivt. Använd inte mockläge i produktion.");
  }
});

async function handleApi(request, response, url) {
  if (["POST", "PUT", "PATCH", "DELETE"].includes(request.method || "") && !isSameOrigin(request)) {
    sendJson(response, 403, { message: "Begäran nekades." });
    return;
  }

  if (request.method === "GET" && url.pathname === "/api/session") {
    const session = getSession(request);
    sendJson(response, 200, {
      authenticated: Boolean(session),
      user: session ? { name: session.name } : null
    });
    return;
  }

  if (request.method === "GET" && url.pathname === "/api/admin/payload") {
    const session = getSession(request);
    if (!session) {
      sendJson(response, 401, { message: "BankID-inloggning krävs." });
      return;
    }

    const [html, script] = await Promise.all([
      readFile(path.join(serverDir, "admin-panel.html"), "utf8"),
      readFile(path.join(serverDir, "admin-panel.js"), "utf8")
    ]);
    sendJson(response, 200, { html, script });
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/logout") {
    const parsed = readSessionCookie(request);
    if (parsed) sessions.delete(parsed.id);
    clearCookie(response);
    sendJson(response, 200, { ok: true });
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/bankid/auth") {
    if (mockEnabled) {
      const order = createMockOrder();
      sendJson(response, 200, {
        orderRef: order.orderRef,
        autoStartToken: order.autoStartToken,
        message: "Testläge: BankID simuleras och blir godkänt om några sekunder."
      });
      return;
    }

    const authUrl = requireEnv("BANKID_AUTH_URL");
    const body = {
      endUserIp: getClientIp(request)
    };
    const result = await bankIdRequest(authUrl, body);
    if (!result.orderRef) {
      sendJson(response, 502, { message: "BankID-svaret saknar orderRef." });
      return;
    }
    orders.set(result.orderRef, { createdAt: Date.now() });
    sendJson(response, 200, {
      orderRef: result.orderRef,
      autoStartToken: result.autoStartToken || "",
      qrStartToken: result.qrStartToken || "",
      message: "Öppna BankID och legitimera dig."
    });
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/bankid/collect") {
    const { orderRef } = await readJsonBody(request);
    if (!orderRef || typeof orderRef !== "string") {
      sendJson(response, 400, { message: "orderRef saknas." });
      return;
    }

    if (mockEnabled) {
      await collectMockOrder(request, response, orderRef);
      return;
    }

    const collectUrl = requireEnv("BANKID_COLLECT_URL");
    const result = await bankIdRequest(collectUrl, { orderRef });

    if (result.status === "complete") {
      const user = result.completionData?.user || {};
      if (!isAllowedAdmin(user.personalNumber)) {
        sendJson(response, 403, { status: "failed", message: "BankID är giltigt, men personen är inte tillåten för admin." });
        return;
      }

      createSession(response, {
        name: user.name || "BankID-admin",
        personalNumber: user.personalNumber
      });
    }

    sendJson(response, 200, {
      status: result.status,
      hintCode: result.hintCode || "",
      message: bankIdMessage(result.status, result.hintCode)
    });
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/bankid/cancel") {
    const { orderRef } = await readJsonBody(request);
    if (!orderRef || typeof orderRef !== "string") {
      sendJson(response, 400, { message: "orderRef saknas." });
      return;
    }

    if (mockEnabled) {
      orders.delete(orderRef);
      sendJson(response, 200, { ok: true });
      return;
    }

    const cancelUrl = requireEnv("BANKID_CANCEL_URL");
    await bankIdRequest(cancelUrl, { orderRef });
    sendJson(response, 200, { ok: true });
    return;
  }

  sendJson(response, 404, { message: "API-routen finns inte." });
}

async function serveStatic(request, response, url) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405);
    response.end();
    return;
  }

  let pathname = decodeURIComponent(url.pathname);
  if (pathname === "/") pathname = "/index.html";
  if (pathname === "/admin") pathname = "/admin.html";

  if (pathname.includes("\0") || pathname.startsWith("/server/") || pathname.startsWith("/.") || pathname.includes("/.")) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  const filePath = path.normalize(path.join(rootDir, pathname));
  if (!filePath.startsWith(rootDir)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  if (!existsSync(filePath) || !(await stat(filePath)).isFile()) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  response.writeHead(200, { "Content-Type": mimeTypes.get(path.extname(filePath)) || "application/octet-stream" });
  if (request.method === "HEAD") {
    response.end();
    return;
  }
  createReadStream(filePath).pipe(response);
}

function createMockOrder() {
  const orderRef = crypto.randomUUID();
  const autoStartToken = crypto.randomUUID();
  orders.set(orderRef, {
    createdAt: Date.now(),
    autoStartToken,
    mock: true
  });
  return { orderRef, autoStartToken };
}

async function collectMockOrder(request, response, orderRef) {
  const order = orders.get(orderRef);
  if (!order) {
    sendJson(response, 200, { status: "failed", message: "Testordern finns inte längre." });
    return;
  }

  if (Date.now() - order.createdAt < 4000) {
    sendJson(response, 200, { status: "pending", message: "Testläge: väntar på BankID..." });
    return;
  }

  const personalNumber = process.env.BANKID_MOCK_PERSONAL_NUMBER || "199001011234";
  createSession(response, {
    name: process.env.BANKID_MOCK_NAME || "Mjölnir Admin",
    personalNumber
  });
  orders.delete(orderRef);
  sendJson(response, 200, { status: "complete", message: "Testinloggningen är klar." });
}

async function bankIdRequest(endpoint, body) {
  const agent = createBankIdAgent();
  const url = new URL(endpoint);
  const payload = JSON.stringify(body);

  return new Promise((resolve, reject) => {
    const request = https.request(url, {
      method: "POST",
      agent,
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(payload)
      }
    }, (response) => {
      const chunks = [];
      response.on("data", (chunk) => chunks.push(chunk));
      response.on("end", () => {
        const text = Buffer.concat(chunks).toString("utf8");
        const parsed = text ? JSON.parse(text) : {};
        if (response.statusCode >= 200 && response.statusCode < 300) {
          resolve(parsed);
          return;
        }
        reject(new Error(parsed.details || parsed.message || "BankID-anropet misslyckades."));
      });
    });

    request.on("error", reject);
    request.write(payload);
    request.end();
  });
}

function createBankIdAgent() {
  const options = {};
  const pfxPath = process.env.BANKID_CLIENT_PFX_PATH;
  const certPath = process.env.BANKID_CLIENT_CERT_PATH;
  const keyPath = process.env.BANKID_CLIENT_KEY_PATH;
  const caPath = process.env.BANKID_CA_CERT_PATH;

  if (pfxPath) options.pfx = readFileSync(path.resolve(rootDir, pfxPath));
  if (certPath) options.cert = readFileSync(path.resolve(rootDir, certPath));
  if (keyPath) options.key = readFileSync(path.resolve(rootDir, keyPath));
  if (caPath) options.ca = readFileSync(path.resolve(rootDir, caPath));
  if (process.env.BANKID_CLIENT_CERT_PASSPHRASE) options.passphrase = process.env.BANKID_CLIENT_CERT_PASSPHRASE;

  if (!pfxPath && (!certPath || !keyPath)) {
    throw new Error("BankID-certifikat saknas. Fyll i BANKID_CLIENT_PFX_PATH eller BANKID_CLIENT_CERT_PATH + BANKID_CLIENT_KEY_PATH.");
  }

  return new https.Agent(options);
}

function createSession(response, user) {
  const id = crypto.randomBytes(32).toString("base64url");
  sessions.set(id, {
    ...user,
    expiresAt: Date.now() + sessionMaxAgeSeconds * 1000
  });

  const signed = `${id}.${signSessionId(id)}`;
  const secure = process.env.NODE_ENV === "production" ? " Secure;" : "";
  response.setHeader("Set-Cookie", `${sessionCookie}=${signed}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${sessionMaxAgeSeconds};${secure}`);
}

function getSession(request) {
  const parsed = readSessionCookie(request);
  if (!parsed) return null;

  const session = sessions.get(parsed.id);
  if (!session || session.expiresAt < Date.now()) {
    sessions.delete(parsed.id);
    return null;
  }
  return session;
}

function readSessionCookie(request) {
  const cookieHeader = request.headers.cookie || "";
  const cookie = cookieHeader.split(";").map((item) => item.trim()).find((item) => item.startsWith(`${sessionCookie}=`));
  if (!cookie) return null;

  const value = cookie.slice(sessionCookie.length + 1);
  const [id, signature] = value.split(".");
  if (!id || !signature || signSessionId(id) !== signature) return null;
  return { id };
}

function signSessionId(id) {
  return crypto.createHmac("sha256", sessionSecret).update(id).digest("base64url");
}

function clearCookie(response) {
  response.setHeader("Set-Cookie", `${sessionCookie}=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0`);
}

async function readJsonBody(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  const text = Buffer.concat(chunks).toString("utf8");
  if (!text) return {};
  return JSON.parse(text);
}

function sendJson(response, status, data) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(data));
}

function addSecurityHeaders(response) {
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  response.setHeader("X-Frame-Options", "DENY");
  response.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
}

function getClientIp(request) {
  const forwarded = request.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.trim()) {
    return forwarded.split(",")[0].trim();
  }
  return request.socket.remoteAddress || "127.0.0.1";
}

function isSameOrigin(request) {
  const origin = request.headers.origin;
  if (!origin) return true;

  try {
    return new URL(origin).host === request.headers.host;
  } catch (error) {
    return false;
  }
}

function isAllowedAdmin(personalNumber) {
  const allowed = (process.env.BANKID_ALLOWED_PERSONAL_NUMBERS || "")
    .split(",")
    .map((value) => value.replace(/\D/g, ""))
    .filter(Boolean);

  if (!allowed.length) return false;
  return allowed.includes(String(personalNumber || "").replace(/\D/g, ""));
}

function bankIdMessage(status, hintCode) {
  if (status === "complete") return "BankID-inloggningen är klar.";
  if (status === "failed") return "BankID-inloggningen misslyckades eller avbröts.";
  if (hintCode === "outstandingTransaction") return "Starta BankID-appen.";
  if (hintCode === "userSign") return "Skriv in din säkerhetskod i BankID.";
  return "Väntar på BankID...";
}

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} saknas i .env.`);
  }
  return value;
}

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) return;
  const lines = readFileSync(filePath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const index = trimmed.indexOf("=");
    const key = trimmed.slice(0, index).trim();
    let value = trimmed.slice(index + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}
