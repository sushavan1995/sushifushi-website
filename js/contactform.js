"use strict";
/*contact form validation */
const contactForm = document.getElementById("contact-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

//flag for submitting
var nameFlag = false;
var emailFlag = false;
var phoneFlag =false;

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    checkInputs();
    if(nameFlag && emailFlag && phoneFlag) {
        messageControl();
        let inpContainer = document.getElementsByClassName("input-container");
        for(var i =0; i< inpContainer.length; i++) {
            inpContainer[i].classList.remove("success");
        }
        contactForm.reset();
        nameFlag = false;
        emailFlag = false;
        phoneFlag = false;
   }
})

function checkInputs() {
    const nameValue = name.value;
    const emailValue = email.value;
    const phoneValue = phone.value;

    const nameRegex = /^[a-zA-Z- ]{3,25}$/;
    const phoneRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(nameValue === ""){
        setErrorFor(name, "Full name cannot be blank.")
    }
    else if(nameRegex.test(nameValue)) {
        setSuccessFor(name);
        nameFlag = true;
    }
    else {
        setErrorFor(name, "Please enter a valid full name");
    }

    if(emailValue === "") {
        setErrorFor(email, "Email cannot be blank.")
    }
    else if(emailRegex.test(emailValue)){
        setSuccessFor(email);
        emailFlag = true;
    }
    else {
        setErrorFor(email, "Please enter a valid Email address");
    }

    if(phoneValue === "") {
        setErrorFor(phone, "Phone cannot be blank.")
    }
    else if(phoneRegex.test(phoneValue)){
        setSuccessFor(phone);
        phoneFlag = true;
    }
    else {
        setErrorFor(phone, "Please enter a valid phone no.")
    }
}

function setErrorFor(input, message) {
    const inputContainer = input.parentElement;
    const small = inputContainer.querySelector("small");
    inputContainer.className = "input-container error";
    small.innerText = message;
}
function setSuccessFor(input) {
    const inputContainer = input.parentElement;
	inputContainer.className = 'input-container success';
}