"use strict";
/* career form validation */
const careerForm = document.getElementById("careerForm");
const cname = document.getElementById("cname");
const cemail = document.getElementById("cemail");
const cphone = document.getElementById("cphone");
const caddress = document.getElementById("caddress");

//flag for submitting
var cnameFlag = false;
var cemailFlag = false;
var cphoneFlag = false;
var caddressFlag = false;

careerForm.addEventListener("submit", function(e) {
    e.preventDefault();
    checkInputs();
    if(cnameFlag && cemailFlag && cphoneFlag && caddressFlag) {
        messageControl();
        let inpContainer = document.getElementsByClassName("input-container");
        for(var i =0; i< inpContainer.length; i++) {
            inpContainer[i].classList.remove("success");
        }
        careerForm.reset();
        cnameFlag = false;
        cemailFlag = false;
        cphoneFlag = false;
        caddressFlag = false;
   }
})

function checkInputs() {
    const nameValue = cname.value;
    const emailValue = cemail.value;
    const phoneValue = cphone.value;
    const addressValue = caddress.value;

    const nameRegex = /^[a-zA-Z- ]{3,25}$/;
    const phoneRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(nameValue === ""){
        setErrorFor(cname, "Full name cannot be blank.")
    }
    else if(nameRegex.test(nameValue)) {
        setSuccessFor(cname);
        cnameFlag = true;
    }
    else {
        setErrorFor(cname, "Please enter a valid full name");
    }

    if(emailValue === "") {
        setErrorFor(cemail, "Email cannot be blank.")
    }
    else if(emailRegex.test(emailValue)){
        setSuccessFor(cemail);
        cemailFlag = true;
    }
    else {
        setErrorFor(cemail, "Please enter a valid Email address");
    }

    if(phoneValue === "") {
        setErrorFor(cphone, "Phone cannot be blank.")
    }
    else if(phoneRegex.test(phoneValue)){
        setSuccessFor(cphone);
        cphoneFlag = true;
    }
    else {
        setErrorFor(cphone, "Please enter a valid phone no.")
    }

    if(addressValue === "") {
        setErrorFor(caddress, "Address cannot be blank.")
    }
    else {
        setSuccessFor(caddress);
        caddressFlag = true;
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