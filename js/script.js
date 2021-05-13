"use strict";
/* navbar shrink */
var nav = document.querySelector("#mainNav");
document.addEventListener("scroll", function() {
    if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        nav.classList.add("navbar-shrink");
    }
    else {
        nav.classList.remove("navbar-shrink");
    }
});