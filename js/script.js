"use strict";
AOS.init({once: true});

/* navbar shrink */
var nav = document.querySelector("#mainNav");
document.addEventListener("scroll", function() {
    if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        nav.classList.add("navbar-shrink", "hide-top-header");
    }
    else {
        nav.classList.remove("navbar-shrink", "hide-top-header");
    }
});


/* message upon form submitting */
function messageControl() {
    let notification = document.getElementById("submission-notification");
    let closeMessage = document.getElementById("close-message");
    notification.classList.add("show");
    setTimeout(function(){
        notification.classList.remove("show");
    },7000);
    closeMessage.addEventListener("click", function(){
        notification.classList.remove("show");
    });
}
