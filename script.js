// Make mobile navigation work
const btnNavEl = document.querySelector(".button-mobile-nav");
const headerEl = document.querySelector(".main-header");
const navLinkEl = document.querySelector(".nav-list");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open"); // If 'nav-open' does not appear in the headerEl class, then add it. If not, remove.
});

navLinkEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
