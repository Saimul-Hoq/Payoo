let currentActive = null;
const el_cashoutBtn = document.querySelector("#cashout-btn");
const el_transferBtn = document.querySelector("#transfer-btn")
const el_bonusBtn = document.querySelector("#bonus-btn");
const el_addMoneyBtn = document.querySelector("#addMoney-btn");
const el_payBillBtn = document.querySelector("#payBill-btn");

const el_cashoutSection = document.querySelector("#cashout-section");
const el_transferSection = document.querySelector("#transfer-section");
const el_bonusSection = document.querySelector("#bonus-section");
const el_addMoneySection = document.querySelector("#addMoney-section");
const el_payBillSection = document.querySelector("#payBill-section");


el_cashoutBtn.addEventListener("click", () => {
    if(currentActive){
        currentActive.classList.add("hidden");
    }
    el_cashoutSection.classList.remove("hidden");
    currentActive = el_cashoutSection;
})
el_transferBtn.addEventListener("click", () => {
    if(currentActive){
        currentActive.classList.add("hidden");
    }
    el_transferSection.classList.remove("hidden");
    currentActive = el_transferSection;
})
el_bonusBtn.addEventListener("click", () => {
    if(currentActive){
        currentActive.classList.add("hidden");
    }
    el_bonusSection.classList.remove("hidden");
    currentActive = el_bonusSection;
})

el_addMoneyBtn.addEventListener("click", () => {
    if(currentActive){
        currentActive.classList.add("hidden");
    }
    el_addMoneySection.classList.remove("hidden");
    currentActive = el_addMoneySection;
})
el_payBillBtn.addEventListener("click", () => {
    if(currentActive){
        currentActive.classList.add("hidden");
    }
    el_payBillSection.classList.remove("hidden");
    currentActive = el_payBillSection;
})