const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

// function to run thru and check if len matches or display error msg

function validateForm(event){
    event.preventDefault();

    if(checkLength(firstName.value, 0) === true){
        firstNameError.style.display = "none";
    } else{
        firstNameError.style.display = "block";
    }
    if(checkLength(message.value, 10) === true){
        messageError.style.display = "none";
    } else{
        messageError.style.display = "block";
    }
    if(checkLength(address.value, 5) === true){
        addressError.style.display = "none";
    } else{
        addressError.style.display = "block";
    }
    if(validateEmail(email.value) === true){
        emailError.style.display = "none";
    } else{
        emailError.style.display = "block";
    }

    if(checkLength(firstName.value, 0) && checkLength(message.value, 10) && checkLength(address.value, 5) && validateEmail(email.value) === true){
        success.style.display = "block";
    } else{
        success.style.display = "none";
    }

    console.log("it works");
}

form.addEventListener("submit", validateForm);

// function to check the length of the passed in value

function checkLength(value, len){
    if(value.trim().length > len){
        return true;
    } 
    else{
        return false;
    }
}

// function to validate if passed in value is email or not

function validateEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}