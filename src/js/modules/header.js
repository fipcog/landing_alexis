"use strict";

module.exports = function () {

    const header = document.querySelector(".header");
    const nav = document.querySelector(".header__nav");
    const hamburger = document.querySelector(".header__hamburger");

    const toggleBtn = () => hamburger.classList.toggle("header__hamburger--active");
    const showMenu = () => {
        nav.style.display = "block";
        toggleBtn();
    }
    const hideMenu = () => {
        nav.style.display = "none";
        toggleBtn();
    }

    const toggleMenu = function (event) {

        if (event.target.closest(".header__hamburger")) {

            nav.addEventListener("click",
                (e) => {
                    if(e.target.closest("A") || e.target.closest(".btn__close")) {
                        hideMenu();
                    }
                } , {once: true});

            showMenu();
        }
    };

    header.addEventListener("click", toggleMenu);

    window.addEventListener("resize", () => {

        if (header.offsetWidth > 992) {
            showMenu();
        } else {
            hideMenu();
            hamburger.classList.remove("header__hamburger--active");
        }
    });
}