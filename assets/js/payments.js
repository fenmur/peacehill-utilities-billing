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
});
