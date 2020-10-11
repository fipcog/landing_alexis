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