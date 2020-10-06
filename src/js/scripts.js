"use strict";

//header -----------------
{
    const header = document.querySelector(".header");
    const nav = document.querySelector(".header__nav");
    const hamburger = document.querySelector(".header__hamburger");

    const toggleBtn = () => hamburger.classList.toggle("header__hamburger--active");

    const toggleMenu = function (e) {

        if (e.target.closest(".header__hamburger")) {
            nav.style.display = "block";
            toggleBtn();
        }

        if (e.target.closest(".btn__close")) {
            nav.style.display = "none";
            toggleBtn();
        }
    };

    header.addEventListener("click", toggleMenu);

    window.addEventListener("resize", () => {

        if (header.offsetWidth > 992) {
            nav.style.display = "block";
        } else {
            nav.style.display = "none";
            hamburger.classList.remove("header__hamburger--active")
        }
    });
}

//team -----------------------
{
    const teamMocks = [
        {
            name: "Michael",
            title: "About Michael.",
        },
        {
            name: "David",
            title: "About David.",
        },
        {
            name: "Anna",
            title: "About Anna.",
        },
        {
            name: "Jason",
            title: "About Jason.",
        },
    ];

    const team = document.querySelector(".team");
    const shadingElem = team.querySelector(".team__shading");
    const teamAbout = team.querySelector(".team__about");

    const replaceClass = function (className) {

        if(className === activeClass) return;

        teamAbout.classList.remove(activeClass);
        teamAbout.classList.add(className);

        activeClass = className;
    };

    const replaceContent = function (name) {
        const title = teamAbout.querySelector(".team__about_title");
        const member = teamMocks.find(item =>item.name === name);

        title.textContent = member.title;
    };

    const toggleContent = function (e) {
        let targetName = e.target.closest("button").name;

        replaceContent(targetName);

        switch (targetName) {

            case "Michael":
                replaceClass("team__about--first");
                break;

            case "David":
                replaceClass("team__about--second");
                break;

            case "Anna":
                replaceClass("team__about--third");
                break;

            case "Jason":
                replaceClass("team__about--fourth");

        }
    };

    const togglePopup = function (e) {

        if(team.offsetWidth <= 1570) {

            if(e.target.closest(".team__btn")) {
                shadingElem.style.display = "block";
                teamAbout.style.display = "block";
            }

            if(e.target.closest(".btn__close")) {
                teamAbout.style.display = "none";
                shadingElem.style.display = "none";
            }
        }
    };

    //стоковое состояние при загрузке страницы
    let activeClass = "team__about--first";
    replaceContent("Michael");

    team.addEventListener("click", toggleContent);
    team.addEventListener("click", togglePopup);

    window.addEventListener("resize", () => {

        if(team.offsetWidth > 1570) {
            teamAbout.style.display = "block";
            shadingElem.style.display = "none";
        } else {
            teamAbout.style.display = "none";
            shadingElem.style.display = "none";
        }
    });
}
