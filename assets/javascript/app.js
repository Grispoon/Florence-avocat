'use strict'

window.parent.document.title = "Accueil";

const landingSection = document.querySelector(".landing-page-section");
const headerBlack = document.querySelector(".header__home-page");
const menuBruger = document.querySelector(".responsive-nav__navigation");
const cache = document.querySelector(".cache")
// window.onscroll = function () {
//   if (document.documentElement.scrollTop > 500) {
//     headerBlack.style.background = "#231E23";
//   } else {
//     headerBlack.style.background = "transparent";
//   }
// };

menuBruger.addEventListener("click", () => {
  cache.classList.toggle("cache-active")
});


window.onscroll = function () {
  if (document.documentElement.scrollTop > landingSection.ariaValueMax) {
    headerBlack.classList.add("background-color-nav");
    headerBlack.classList.remove("transparent");
  } else {
    headerBlack.classList.add("transparent");
    headerBlack.classList.remove("background-color-nav");
  }
};



