(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// //header -----------------
// {
//     const header = document.querySelector(".header");
//     const nav = document.querySelector(".header__nav");
//     const hamburger = document.querySelector(".header__hamburger");
//
//     const toggleBtn = () => hamburger.classList.toggle("header__hamburger--active");
//     const showMenu = () => {
//         nav.style.display = "block";
//         toggleBtn();
//     }
//     const hideMenu = () => {
//         nav.style.display = "none";
//         toggleBtn();
//     }
//
//     const toggleMenu = function (event) {
//
//         if (event.target.closest(".header__hamburger")) {
//
//             nav.addEventListener("click",
//                 (e) => {
//                     if(e.target.closest("A") || e.target.closest(".btn__close")) {
//                         hideMenu();
//                     }
//                 } , {once: true});
//
//             showMenu();
//         }
//     };
//
//     header.addEventListener("click", toggleMenu);
//
//     window.addEventListener("resize", () => {
//
//         if (header.offsetWidth > 992) {
//             showMenu();
//         } else {
//             hideMenu();
//             hamburger.classList.remove("header__hamburger--active");
//         }
//     });
// }
//
// //team -----------------------
// {
//     const teamMocks = [
//         {
//             "name": "Michael",
//             "title": "About Michael.",
//         },
//         {
//             "name": "David",
//             "title": "About David.",
//         },
//         {
//             "name": "Anna",
//             "title": "About Anna.",
//         },
//         {
//             "name": "Jason",
//             "title": "About Jason.",
//         },
//     ];
//
//     const team = document.querySelector(".team");
//     const shadingElem = team.querySelector(".team__shading");
//     const teamAbout = team.querySelector(".team__about");
//
//     const replaceClass = function (className) {
//
//         if(className === activeClass) return;
//
//         teamAbout.classList.remove(activeClass);
//         teamAbout.classList.add(className);
//
//         activeClass = className;
//     };
//
//     const replaceContent = function (name) {
//         const title = teamAbout.querySelector(".team__about_title");
//         const member = teamMocks.find(item =>item.name === name);
//
//         title.textContent = member.title;
//     };
//
//     const toggleContent = function (e) {
//         let targetName = e.target.closest("button").name;
//
//         replaceContent(targetName);
//
//         switch (targetName) {
//
//             case "Michael":
//                 replaceClass("team__about--first");
//                 break;
//
//             case "David":
//                 replaceClass("team__about--second");
//                 break;
//
//             case "Anna":
//                 replaceClass("team__about--third");
//                 break;
//
//             case "Jason":
//                 replaceClass("team__about--fourth");
//
//         }
//     };
//
//     const showPopupTeam = () => {
//         shadingElem.style.display = "block";
//         teamAbout.style.display = "block";
//     };
//     const hidePopupTeam = () => {
//         teamAbout.style.display = "none";
//         shadingElem.style.display = "none";
//     }
//
//     const togglePopup = function (e) {
//
//         if(team.offsetWidth <= 1570) {
//
//             if(e.target.closest(".team__btn")) {
//                 showPopupTeam();
//             }
//
//             if(e.target.closest(".btn__close")) {
//                 hidePopupTeam();
//             }
//         }
//     };
//
//     team.addEventListener("click", toggleContent);
//     team.addEventListener("click", togglePopup);
//
//     window.addEventListener("resize", () => {
//
//         if(team.offsetWidth > 1570) {
//             showPopupTeam();
//             shadingElem.style.display = "none";
//         } else {
//             hidePopupTeam();
//         }
//     });
//
//     //стоковое состояние при загрузке страницы
//     let activeClass = "team__about--first";
//     replaceContent("Michael");
// }

const initHeader = require('./modules/header');
const initTeam = require('./modules/team');

initHeader();
initTeam();
},{"./modules/header":2,"./modules/team":3}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
"use strict";

module.exports = function () {
    const teamMocks = [
        {
            "name": "Michael",
            "title": "About Michael.",
        },
        {
            "name": "David",
            "title": "About David.",
        },
        {
            "name": "Anna",
            "title": "About Anna.",
        },
        {
            "name": "Jason",
            "title": "About Jason.",
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

    const showPopupTeam = () => {
        shadingElem.style.display = "block";
        teamAbout.style.display = "block";
    };
    const hidePopupTeam = () => {
        teamAbout.style.display = "none";
        shadingElem.style.display = "none";
    }

    const togglePopup = function (e) {

        if(team.offsetWidth <= 1570) {

            if(e.target.closest(".team__btn")) {
                showPopupTeam();
            }

            if(e.target.closest(".btn__close")) {
                hidePopupTeam();
            }
        }
    };

    team.addEventListener("click", toggleContent);
    team.addEventListener("click", togglePopup);

    window.addEventListener("resize", () => {

        if(team.offsetWidth > 1570) {
            showPopupTeam();
            shadingElem.style.display = "none";
        } else {
            hidePopupTeam();
        }
    });

//стоковое состояние при загрузке страницы
    let activeClass = "team__about--first";
    replaceContent("Michael");
}
},{}]},{},[1]);
