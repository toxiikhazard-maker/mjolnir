(() => {
  const config = window.mjolnirConfig || {};
  const sourcePrices = config.priceListData || [];
  const sourceEmail = config.contactFormEmail || "";
  const adminPages = [
    { label: "Startsida", file: "../index.html" },
    { label: "Tjanster", file: "../tjanster.html" },
    { label: "Prislista", file: "../prislista.html" },
    { label: "Sa gar det till", file: "../sa-gar-det-till.html" },
    { label: "Om", file: "../om.html" },
    { label: "Kontakt", file: "../kontakt.html" },
    { label: "Tack-sida", file: "../tack.html" }
  ];

  const pageList = document.getElementById("admin-page-list");
  const exportButton = document.getElementById("admin-export-prices");
  const exportOutput = document.getElementById("admin-export-output");
  const downloadLink = document.getElementById("admin-download-site-js");
  const contactEmailInput = document.getElementById("admin-contact-email");

  const categorySelect = document.getElementById("admin-price-category");
  const itemSelect = document.getElementById("admin-price-item");
  const categoryNameInput = document.getElementById("admin-category-name");
  const categoryNoteInput = document.getElementById("admin-category-note");
  const itemNameInput = document.getElementById("admin-item-name");
  const itemPriceInput = document.getElementById("admin-item-price");
  const itemDetailInput = document.getElementById("admin-item-detail");
  const itemIncludesInput = document.getElementById("admin-item-includes");
  const selectedPriceText = document.getElementById("admin-price-selected");

  let editablePrices = JSON.parse(JSON.stringify(sourcePrices));
  let editableContactFormEmail = sourceEmail;
  let selectedGroupIndex = 0;
  let selectedItemIndex = 0;
  let currentDownloadUrl = "";

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

  const countPriceRows = () => editablePrices.reduce((total, group) => total + group.items.length, 0);
  const selectedGroup = () => editablePrices[selectedGroupIndex] || { category: "", items: [] };
  const selectedItem = () => selectedGroup().items[selectedItemIndex] || {};

  const clampSelection = () => {
    selectedGroupIndex = Math.max(0, Math.min(selectedGroupIndex, editablePrices.length - 1));
    selectedItemIndex = Math.max(0, Math.min(selectedItemIndex, selectedGroup().items.length - 1));
  };

  const renderCategoryOptions = () => {
    categorySelect.innerHTML = editablePrices.map((group, index) => `
      <option value="${index}">${escapeHtml(group.category || `Kategori ${index + 1}`)}</option>
    `).join("");
    categorySelect.value = String(selectedGroupIndex);
  };

  const renderItemOptions = () => {
    const group = selectedGroup();
    itemSelect.innerHTML = group.items.map((item, index) => `
      <option value="${index}">${escapeHtml(item.name || `Artikel ${index + 1}`)}${item.price ? ` - ${escapeHtml(item.price)}` : ""}</option>
    `).join("");
    itemSelect.value = String(selectedItemIndex);
  };

  const updateSelectedText = () => {
    const group = selectedGroup();
    selectedPriceText.textContent = `${selectedItemIndex + 1} av ${group.items.length} artiklar i ${group.category}. Totalt ${countPriceRows()} prisrader.`;
  };

  const renderSelectedEditor = () => {
    clampSelection();
    const group = selectedGroup();
    const item = selectedItem();

    renderCategoryOptions();
    renderItemOptions();

    categoryNameInput.value = group.category || "";
    categoryNoteInput.value = group.note || "";
    itemNameInput.value = item.name || "";
    itemPriceInput.value = item.price || "";
    itemDetailInput.value = item.detail || "";
    itemIncludesInput.value = (item.includes || []).join("\n");
    updateSelectedText();
  };

  const updateCategoryField = (field, value) => {
    const group = selectedGroup();
    const trimmed = value.trim();

    if (trimmed) {
      group[field] = trimmed;
    } else if (field !== "category") {
      delete group[field];
    }

    renderCategoryOptions();
    categorySelect.value = String(selectedGroupIndex);
    updateSelectedText();
  };

  const updateItemField = (field, value) => {
    const item = selectedItem();
    const trimmed = value.trim();

    if (field === "includes") {
      const lines = value.split("\n").map((line) => line.trim()).filter(Boolean);
      if (lines.length) {
        item.includes = lines;
      } else {
        delete item.includes;
      }
      return;
    }

    if (trimmed) {
      item[field] = trimmed;
    } else {
      delete item[field];
    }

    renderItemOptions();
    itemSelect.value = String(selectedItemIndex);
  };

  const renderAdmin = () => {
    document.getElementById("admin-page-count").textContent = adminPages.length;
    document.getElementById("admin-category-count").textContent = editablePrices.length;
    document.getElementById("admin-price-count").textContent = countPriceRows();
    contactEmailInput.value = editableContactFormEmail;

    pageList.innerHTML = adminPages.map((page) => `
      <a class="admin-page-card" href="${page.file}">
        <strong>${page.label}</strong>
        <span>${page.file.replace("../", "")}</span>
      </a>
    `).join("");

    renderSelectedEditor();
  };

  const buildConfigBlock = () => `// Byt till den e-postadress som ska ta emot kontaktformularets meddelanden.
const contactFormEmail = ${JSON.stringify(editableContactFormEmail)};

// Redigera prislistan har: andra titel, artiklar, priser, noter eller paket-innehall.
const priceListData = ${JSON.stringify(editablePrices, null, 2)};
`;

  const buildSiteJsExport = async () => {
    const response = await fetch("../site.js", { cache: "no-store" });
    const currentSiteJs = await response.text();
    const marker = "window.mjolnirConfig =";
    const markerIndex = currentSiteJs.indexOf(marker);

    if (markerIndex === -1) {
      return buildConfigBlock();
    }

    return `${buildConfigBlock()}\n${currentSiteJs.slice(markerIndex)}`;
  };

  categorySelect.addEventListener("change", () => {
    selectedGroupIndex = Number(categorySelect.value);
    selectedItemIndex = 0;
    renderSelectedEditor();
  });

  itemSelect.addEventListener("change", () => {
    selectedItemIndex = Number(itemSelect.value);
    renderSelectedEditor();
  });

  categoryNameInput.addEventListener("input", () => {
    updateCategoryField("category", categoryNameInput.value);
  });

  categoryNoteInput.addEventListener("input", () => {
    updateCategoryField("note", categoryNoteInput.value);
  });

  itemNameInput.addEventListener("input", () => {
    updateItemField("name", itemNameInput.value);
  });

  itemPriceInput.addEventListener("input", () => {
    updateItemField("price", itemPriceInput.value);
  });

  itemDetailInput.addEventListener("input", () => {
    updateItemField("detail", itemDetailInput.value);
  });

  itemIncludesInput.addEventListener("input", () => {
    updateItemField("includes", itemIncludesInput.value);
  });

  contactEmailInput.addEventListener("input", () => {
    editableContactFormEmail = contactEmailInput.value.trim();
  });

  exportButton.addEventListener("click", async () => {
    exportButton.disabled = true;

    try {
      const exportValue = await buildSiteJsExport();
      exportOutput.value = exportValue;
      exportOutput.classList.remove("is-hidden");
      exportOutput.focus();
      exportOutput.select();

      if (currentDownloadUrl) URL.revokeObjectURL(currentDownloadUrl);
      currentDownloadUrl = URL.createObjectURL(new Blob([exportValue], { type: "text/javascript" }));
      downloadLink.href = currentDownloadUrl;
      downloadLink.classList.remove("is-hidden");
    } finally {
      exportButton.disabled = false;
    }
  });

  renderAdmin();
})();
