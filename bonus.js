let el_get_bonus_btn = document.querySelector("#get-bonus-btn");
let el_bonus = document.querySelector("#bonus");

const BONUS_CODE = "1234";
const BONUS_AMOUNT = 100; // amount credited when a valid coupon is entered

let couponValidator = function(coupon) {
    if (coupon === "") {
        alert("Please enter your bonus coupon");
        return false;
    }
    if (coupon !== BONUS_CODE) {
        alert("Invalid coupon code");
        return false;
    }
    return true;
};

el_get_bonus_btn.addEventListener("click", () => {
    let coupon = el_bonus.value;
    let totalAmount = Number(el_totalAmount.innerText);

    if (couponValidator(coupon)) {
        
        totalAmount = totalAmount + BONUS_AMOUNT;
        el_totalAmount.innerText = totalAmount;
        alert("Congratulations! You have received "+ BONUS_AMOUNT + "tk bonus.");
        el_bonus.value = "";
    }
});