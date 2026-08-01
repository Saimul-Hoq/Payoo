let el_pay_now_btn = document.querySelector("#pay-now-btn");
let el_bill_type = document.querySelector("#bill-type");
let el_biller_account_number = document.querySelector("#biller-account-number");
let el_payBill_amount = document.querySelector("#payBill-amount");
let el_payBill_pin = document.querySelector("#payBill-pin");

let billTypeValidator = function(billType) {
    if (billType === "") {
        alert("Please select a bill to pay");
        return false;
    }
    return true;
};

el_pay_now_btn.addEventListener("click", () => {
    let billType = el_bill_type.value;
    let billerAccountNumber = el_biller_account_number.value;
    let amount = el_payBill_amount.value;
    let pin = el_payBill_pin.value;
    let totalAmount = Number(el_totalAmount.innerText);

    if (
        billTypeValidator(billType) &&
        mobileNumberValidator(billerAccountNumber) &&
        amountValidator(amount) &&
        pinValidator(pin)
    ) {
        alert("Bill Paid Successfully");
        totalAmount = totalAmount - Number(amount);
        el_totalAmount.innerText = totalAmount;

        el_bill_type.value = "";
        el_biller_account_number.value = "";
        el_payBill_amount.value = "";
        el_payBill_pin.value = "";
    }
});