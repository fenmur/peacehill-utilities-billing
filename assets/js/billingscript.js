document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab=> {
        tab.addEventListener("click", () => {
            tabs.forEach(btn=> btn.classList.remove("active"));
            tab.classList.add("active");

            tabContents.forEach(tabContent => tabContent.classList.remove("active"));
            document.getElementById(tab.dataset.tab).classList.add("active");
        });


    });

});

const invoiceTabs=document.querySelectorAll(".invoice-tab");
invoiceTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        invoiceTabs.forEach(btn=> btn.classList.remove("active"));
        tab.classList.add("active");
        
     const invoiceContent = document.getElementById (tab.dataset.tab);
     invoiceContent.classList.add("active");
    });
});

//New Transactions Drop

const newTransBtn = document.getElementById("new-transaction-btn");
const dropdown = document.querySelector(".dropdown-content");

newTransBtn.addEventListener("click", ()=> {
    dropdown.classList.toggle("show");
});

document.addEventListener("click", (e) => {
    if (!newTransBtn.contains(e.target) && !dropdown.contains (e.target)) {
        dropdown.classList.remove("show");
    }
});

