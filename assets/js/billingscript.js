document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {
            tabs.forEach(btn => btn.classList.remove("active"));
            tab.classList.add("active");

            tabContents.forEach(tabContent => tabContent.classList.remove("active"));
            document.getElementById(tab.dataset.tab).classList.add("active");


        });
    });

    const invoiceTabs = document.querySelectorAll(".invoice-tab");
    const invoiceContents = document.querySelectorAll(".invoice-content");

    invoiceTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
        invoiceTabs.forEach((btn) => btn.classList.remove("active"));
        tab.classList.add("active");

        invoiceContents.forEach((content) => content.classList.remove("active"));
        document.getElementById(tab.dataset.invoice).classList.add("active");
        });
    });

    const defaultInvoiceTab = document.querySelector(".invoice-tab.active");
    if (defaultInvoiceTab) {
        const tabId = defaultInvoiceTab.dataset.invoice;
        const defaultContent = document.getElementById(tabId);
        if (defaultContent) {
            defaultContent.classList.add("active");
        }
    }

    const newTransBtn = document.getElementById("new-transaction-btn");
    const dropdown = document.querySelector (".dropdown-content");

    newTransBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.classList.toggle("show");

    });

    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("show");
        }
        });
        
        document.querySelectorAll(".dropdown-content a").forEach(link => {
            link.addEventListener("click", e => e.preventDefault());
    });
        });