const loginBtn = document.querySelector("#login-btn");

let checkMobileNumber = function(mobileNumber) {
    return /^01\d{9}$/.test(mobileNumber);
};

loginBtn.addEventListener("click", async function() {
    const number = document.querySelector("#mobile-number").value;
    const pin = document.querySelector("#pin").value;
    
    if(!checkMobileNumber(number)){
        alert("Mobile Number is not in a correct format");
    }
    else if(pin.length!==4){
        alert("Pin must be 4 digit");
    }
    else{
        alert("Login Successful");
        window.location.replace("/home.html");
    }
})