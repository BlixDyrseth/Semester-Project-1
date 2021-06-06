const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const fromValidated = document.querySelector("#validateForm");
const formButton = document.querySelector("#formButton");

let isFormValid = false;


function validateForm(event) {

    event.preventDefault();

    if(checkLenght(fullName.value, 2) === true) {
        fullNameError.style.display = "none";
        isFormValid = true;
    } else {
        fullNameError.style.display = "block";
        isFormValid = false;
    }

    if(checkLenght(subject.value, 1) === true) {
        subjectError.style.display = "none";
        isFormValid = true;
    } else {
        subjectError.style.display = "block";
        isFormValid = false;
    }

    if(checkLenght(message.value, 20) === true) {
        messageError.style.display = "none";
        isFormValid = true;
    } else {
        messageError.style.display = "block";
        isFormValid = false;
    }

    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
        isFormValid = true;
    } else {
        emailError.style.display = "block";
        isFormValid = false;
        console.log(isFormValid)
    }   

    console.log("denne funka da")
}

function checkIfvalidated(event) {
    if(checkLenght(fullName.value, 0) && checkLenght(subject.value, 1) && checkLenght(message.value, 20)  && validateEmail(email.value) === true){
        form.reset();
        fromValidated.style.display = "block";
    } else {
    console.log("didn´t work sucka");
}
}

form.addEventListener("submit", validateForm);

form.addEventListener("submit", checkIfvalidated);


function checkLenght(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}