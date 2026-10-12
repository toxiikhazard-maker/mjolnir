(() => {
  const form = document.getElementById("bankid-admin-form");
  const status = document.getElementById("bankid-admin-status");
  const startButton = document.getElementById("bankid-start");
  const cancelButton = document.getElementById("bankid-cancel");
  const openBankIdLink = document.getElementById("bankid-open-link");
  const loginSection = document.getElementById("admin-login");
  const root = document.getElementById("secure-admin-root");

  let activeOrderRef = "";
  let pollTimer = 0;

  const setStatus = (message) => {
    if (status) status.textContent = message;
  };

  const api = async (path, options = {}) => {
    const response = await fetch(path, {
      headers: { "Content-Type": "application/json", ...(options.headers || {}) },
      credentials: "same-origin",
      ...options
    });

    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(body.message || "BankID-tjänsten svarade inte som väntat.");
    }
    return body;
  };

  const bankIdUrl = (autoStartToken) => {
    const redirect = encodeURIComponent(window.location.href);
    const token = encodeURIComponent(autoStartToken);
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const scheme = isMobile ? "https://app.bankid.com/" : "bankid:///";
    return `${scheme}?autostarttoken=${token}&redirect=${redirect}`;
  };

  const stopPolling = () => {
    if (pollTimer) {
      window.clearInterval(pollTimer);
      pollTimer = 0;
    }
  };

  const loadAdmin = async () => {
    stopPolling();
    const payload = await api("/api/admin/payload");
    root.innerHTML = payload.html;
    new Function(payload.script)();
    loginSection.classList.add("is-hidden");
    setStatus("");
  };

  const checkSession = async () => {
    try {
      const session = await api("/api/session");
      if (session.authenticated) {
        await loadAdmin();
      }
    } catch (error) {
      setStatus("Admin kräver BankID-inloggning via servern.");
    }
  };

  const pollOrder = () => {
    stopPolling();
    pollTimer = window.setInterval(async () => {
      if (!activeOrderRef) return;

      try {
        const result = await api("/api/bankid/collect", {
          method: "POST",
          body: JSON.stringify({ orderRef: activeOrderRef })
        });

        if (result.status === "complete") {
          setStatus("Inloggningen är klar. Öppnar admin...");
          await loadAdmin();
          return;
        }

        if (result.status === "failed") {
          stopPolling();
          activeOrderRef = "";
          cancelButton.hidden = true;
          startButton.disabled = false;
          openBankIdLink.hidden = true;
          setStatus(result.message || "BankID-inloggningen avbröts eller misslyckades.");
          return;
        }

        setStatus(result.message || "Väntar på BankID...");
      } catch (error) {
        stopPolling();
        startButton.disabled = false;
        cancelButton.hidden = true;
        openBankIdLink.hidden = true;
        setStatus(error.message);
      }
    }, 2000);
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    startButton.disabled = true;
    cancelButton.hidden = false;
    openBankIdLink.hidden = true;
    setStatus("Startar BankID...");

    try {
      const order = await api("/api/bankid/auth", { method: "POST", body: "{}" });
      activeOrderRef = order.orderRef;

      if (order.autoStartToken) {
        openBankIdLink.href = bankIdUrl(order.autoStartToken);
        openBankIdLink.hidden = false;
      }

      setStatus(order.message || "Öppna BankID och legitimera dig.");
      pollOrder();
    } catch (error) {
      startButton.disabled = false;
      cancelButton.hidden = true;
      setStatus(error.message);
    }
  });

  cancelButton.addEventListener("click", async () => {
    if (!activeOrderRef) return;
    const orderRef = activeOrderRef;
    activeOrderRef = "";
    stopPolling();
    cancelButton.hidden = true;
    openBankIdLink.hidden = true;
    startButton.disabled = false;
    setStatus("Avbryter BankID...");

    try {
      await api("/api/bankid/cancel", {
        method: "POST",
        body: JSON.stringify({ orderRef })
      });
      setStatus("BankID-inloggningen avbröts.");
    } catch (error) {
      setStatus(error.message);
    }
  });

  checkSession();
})();
