"use strict";

// ----------------------------------------
// responsive nav btn cross animation
// ---------------------------------------
const getNavBtn = document.querySelector(".menu_btn i");
const getNav = document.querySelector('.nav');
const getMainSection = document.querySelector("#main_section");

// add remove class
const btnHandler = () => {
    if (getNavBtn.classList.contains("fa-bars")) {
        getNavBtn.classList.remove("fa-bars");
        getNavBtn.classList.add("fa-times");
    } else {
        getNavBtn.classList.remove("fa-times");
        getNavBtn.classList.add("fa-bars");
    }
};



getNavBtn.addEventListener('click', () => {
    btnHandler();
    getNav.classList.toggle('active');
    getMainSection.classList.toggle('active_main');
});



// navbar handler 
// ---------------------------------------------------------------
// show image in big container 
// -----------------------------------------------------------------



