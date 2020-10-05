"use strict";

let header = document.querySelector(".header");
let nav = document.querySelector(".header__nav");
let hamburger = document.querySelector(".header__hamburger");

let toggleBtn = () => hamburger.classList.toggle("header__hamburger--active");

let toggleMenu = function(e) {

    if(e.target.closest(".header__hamburger")) {
        nav.style.display = "block";
        toggleBtn();
    }

    if(e.target.closest(".header__close")) {
        nav.style.display = "none";
        toggleBtn();
    }
};

header.addEventListener("click", toggleMenu);

window.onresize = () => {

    if(header.offsetWidth > 992) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
        hamburger.classList.remove("header__hamburger--active")
    }
}

