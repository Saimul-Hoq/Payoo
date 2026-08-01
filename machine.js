let el_totalAmount = document.querySelector("#total-amount");

let mobileNumberValidator = function(mobileNumber) {
    if(mobileNumber === ""){
        alert("Please enter agent number");
        return false;
    }
    let check = /^01\d{9}$/.test(mobileNumber);
    if(!check){
        alert("Agent Number is not valid");
        return false;
    }
    return true;
};

// Amount validator for adding money (no balance ceiling check needed here)
let addAmountValidator = function(str_amount) {
    if (str_amount === "") {
        alert("Please enter amount");
        return false;
    }
    let amount = Number(str_amount);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
        return false;
    }
    return true;
};

let amountValidator = function(str_amount){
    if(str_amount === ""){
        alert("Please enter amount");
        return false;
    }
    let amount = Number(str_amount);
    if(isNaN(amount) || amount<=0){
        alert("Please enter a valid amount");
        return false;
    }
    if(amount > Number(el_totalAmount.innerText)){
        alert("Not enough money");
        return false;
    }
    return true;
}

let pinValidator = function(pinNumber){
    if(pinNumber === ""){
        alert("Please enter PIN");
        return false;
    }
    if(pinNumber.length !== 4){
        alert("PIN must be 4 digit");
        return false;
    }
    return true;
}

// Bank selection validator
let bankValidator = function(bank) {
    if (bank === "") {
        alert("Please select a bank");
        return false;
    }
    return true;
};
 
