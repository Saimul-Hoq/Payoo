let withdraw_btn = document.querySelector("#withdraw-btn");
let agent_number = document.querySelector("#agent-number")
let amount = document.querySelector("#amount")
let pin = document.querySelector("#pin");
let totalAmount = document.querySelector("#total-amount");


let mobileNumberValidator = function(mobileNumber) {
    let check = /^01\d{9}$/.test(mobileNumber);
    if(!check){
        alert("Agent Number is not valid");
        return false;
    }
    return true;
};


let amountValidator = function(amountNumber){
    let amountVal = Number(amountNumber);
    if(isNaN(amountVal) || amountVal<=0){
        alert("Please enter a valid amount");
        return false;
    }
    if(amountVal > Number(totalAmount.innerText)){
        alert("Not enough money");
        return false;
    }
    return true;
}

let pinValidator = function(pinNumber){
    if(pinNumber.length !== 4){
        alert("PIN must be 4 digit");
        return false;
    }
    return true;
}
withdraw_btn.addEventListener("click", () => {
    let agentNumber = agent_number.value;
    let amountVal = amount.value;
    let pinVal = pin.value;
    let totalAmountVal = Number(totalAmount.innerText);
    let check=true;
    if(agentNumber==="" || amountVal==="" || pinVal===""){
        alert("Please fillup all the fields");
    }
    else if(mobileNumberValidator(agentNumber) && amountValidator(amountVal) && pinValidator(pinVal)){
        alert("Withdraw Successful");
        totalAmountVal = totalAmountVal-Number(amountVal);
        totalAmount.innerText = totalAmountVal;
        agent_number.value = "";
        amount.value = "";
        pin.value = "";
    }

})