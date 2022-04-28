// Make mobile navigation work
const btnNavEl = document.querySelector(".button-mobile-nav");
const headerEl = document.querySelector(".main-header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open"); // If 'nav-open' does not appear in the headerEl class, then add it. If not, remove.
});
