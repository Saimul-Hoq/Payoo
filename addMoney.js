let el_add_money_btn = document.querySelector("#add-money-btn");
let el_user_bank = document.querySelector("#user-bank");
let el_bank_account_number = document.querySelector("#bank-account-number");
let el_addMoney_amount = document.querySelector("#addMoney-amount");
let el_addMoney_pin = document.querySelector("#addMoney-pin");


el_add_money_btn.addEventListener("click", () => {
    let bankVal = el_user_bank.value;
    let accountNumberVal = el_bank_account_number.value;
    let amountVal = el_addMoney_amount.value;
    let pinVal = el_addMoney_pin.value;
    let totalAmountVal = Number(el_totalAmount.innerText);
 
    if (
        bankValidator(bankVal) &&
        mobileNumberValidator(accountNumberVal) &&
        addAmountValidator(amountVal) &&
        pinValidator(pinVal)
    ) {
        alert("Money Added Successfully");
        totalAmountVal = totalAmountVal + Number(amountVal);
        el_totalAmount.innerText = totalAmountVal;
 
        el_user_bank.value = "";
        el_bank_account_number.value = "";
        el_addMoney_amount.value = "";
        el_addMoney_pin.value = "";
    }
});