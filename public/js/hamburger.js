const button = document.querySelector(".js-button");
const bars = document.querySelector(".js-bars");
const xmark = document.querySelector(".js-xmark");
const menu = document.querySelector(".js-menu");
const overlay = document.querySelector(".js-overlay");
let flag = false;

button.addEventListener("click", (event) => {
  bars.classList.toggle("hidden");
  xmark.classList.toggle("hidden");
  menu.classList.toggle("translate-x-full");
  overlay.classList.toggle("hidden");

  // aria-expandedの制御
  if (flag) {
    button.setAttribute("aria-expanded", "false");
    flag = false;
  } else {
    button.setAttribute("aria-expanded", "true");
    flag = true;
  }
});

// 背景のオーバーレイをクリックしてメニューを閉じられるように
overlay.addEventListener("click", (event) => {
  bars.classList.toggle("hidden");
  xmark.classList.toggle("hidden");
  menu.classList.toggle("translate-x-full");
  overlay.classList.toggle("hidden");
  button.setAttribute("aria-expanded", "false");
  flag = false;
});

// escキーでメニューを閉じられるように
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    bars.classList.toggle("hidden");
    xmark.classList.toggle("hidden");
    menu.classList.toggle("translate-x-full");
    overlay.classList.toggle("hidden");
    button.setAttribute("aria-expanded", "false");
    flag = false;
  }
});

// フォーカストラップ制御
focusTrap.addEventListener("focus", (e) => {
  button.focus();
});
