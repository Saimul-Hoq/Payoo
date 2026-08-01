let el_send_now_btn = document.querySelector("#send-now-btn");
let el_user_account_number = document.querySelector("#user-account-number");
let el_transfer_amount = document.querySelector("#transfer-amount");
let el_transfer_pin = document.querySelector("#transfer-pin");

el_send_now_btn.addEventListener("click", () => {
    let accountNumber = el_user_account_number.value;
    let amount = el_transfer_amount.value;
    let pin = el_transfer_pin.value;
    let totalAmount = Number(el_totalAmount.innerText);

    if (
        mobileNumberValidator(accountNumber) &&
        amountValidator(amount) &&
        pinValidator(pin)
    ) {
        alert("Transfer Successful");
        totalAmount = totalAmount - Number(amount);
        el_totalAmount.innerText = totalAmount;

        el_user_account_number.value = "";
        el_transfer_amount.value = "";
        el_transfer_pin.value = "";
    }
});