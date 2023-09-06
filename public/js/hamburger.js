const button = document.querySelector(".js-button");
const bars = document.querySelector(".js-bars");
const xmark = document.querySelector(".js-xmark");
const menu = document.querySelector(".js-menu");
const overlay = document.querySelector(".js-overlay");

button.addEventListener("click", (event) => {
  bars.classList.toggle("hidden");
  xmark.classList.toggle("hidden");
  menu.classList.toggle("translate-x-full");
  overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", (event) => {
  bars.classList.toggle("hidden");
  xmark.classList.toggle("hidden");
  menu.classList.toggle("translate-x-full");
  overlay.classList.toggle("hidden");
});
