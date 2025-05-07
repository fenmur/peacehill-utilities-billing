document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((btn) => btn.classList.remove("active"));
      tab.classList.add("active");

      tabContents.forEach((tabContent) =>
        tabContent.classList.remove("active")
      );
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });

  const newTransBtn = document.getElementById("new-transaction-btn");
  const paymentsBtn = document.getElementById("payments-btn");

  const newTransDropdown = newTransBtn.nextElementSibling;
  const paymentsDropdown = paymentsBtn.nextElementSibling;

  newTransBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    newTransDropdown.classList.toggle("show");
    paymentsDropdown.classList.remove("show");
  });

  paymentsBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    paymentsDropdown.classList.toggle("show");
    newTransDropdown.classList.remove("show");
  });

  document.addEventListener("click", () => {
    newTransDropdown.classList.remove("show");
    paymentsDropdown.classList.remove("show");
  });

  const tabButtons = document.querySelectorAll(".status-tab-btn");
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  const addBillBtn = document.getElementById("addBillDropdown");
  const dropdownContent = addBillBtn.nextElementSibling;
  addBillBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle("show");
  });

  document.querySelectorAll(".vendor-tab-btn[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      const tab = button.getAttribute("data-tab");

      document
        .querySelectorAll(".vendor-tab-btn[data-tab]")
        .forEach((btn) => btn.classList.remove("vendor-active"));
      document
        .querySelectorAll(".vendor-tab-content")
        .forEach((content) => content.classList.remove("vendor-active"));

      button.classList.add("vendor-active");
      document.getElementById(tab).classList.add("vendor-active");
    });
  });

  const filterToggle = document.getElementById("filterToggle");

  filterToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    filterPanel.classList.toggle("hidden");
  });

  const appltfilterButton = document.getElementById("applyFilter");
  appltfilterButton.addEventListener("click", function (event) {
    event.stopPropagation();
    filterPanel.classList.toggle("hidden");
  });

  const resetFilterButton = document.getElementById("resetFilter");
  resetFilterButton.addEventListener("click", function (event) {
    event.stopPropagation();
    filterPanel.classList.toggle("hidden");
  });

  const filterVendor = document.getElementById("filterToggleBills");
  const filterPanelBills = document.getElementById("filterPanelBills");
  filterVendor.addEventListener("click", function (event) {
    event.stopPropagation();
    filterPanelBills.classList.toggle("hidden");
  });

  document.querySelectorAll(".schedule-payment").forEach((button) => {
    button.addEventListener("click", function () {
      const dropdownContent = this.nextElementSibling;
      dropdownContent.classList.toggle("visible");
    });
  });

  window.addEventListener("click", function (event) {
    if (!event.target.matches(".schedule-payment")) {
      document.querySelectorAll(".dropdown-content-bill").forEach((content) => {
        content.classList.remove("visible");
      });
    }
  });

  document.addEventListener("click", function (event) {
    if (
      !filterPanel.contains(event.target) &&
      !filterToggle.contains(event.target)
    ) {
      filterPanel.classList.add("hidden");
    }
  });
});
