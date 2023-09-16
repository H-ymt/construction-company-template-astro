const hamburgerToggle = () => {
  const button = document.querySelector(".js-button");
  const bars = document.querySelector(".js-bars");
  const xmark = document.querySelector(".js-xmark");
  const menu = document.querySelector(".js-menu");
  const overlay = document.querySelector(".js-overlay");

  const toggleMenu = (expanded) => {
    bars.classList.toggle("hidden");
    xmark.classList.toggle("hidden");
    menu.classList.toggle("translate-x-full");
    overlay.classList.toggle("hidden");
    button.setAttribute("aria-expanded", expanded);
  };

  button.addEventListener("click", (event) => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    toggleMenu(expanded ? "false" : "true");
  });

  overlay.addEventListener("click", (event) => {
    toggleMenu("false");
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      toggleMenu("false");
    }
  });
};

hamburgerToggle();
document.addEventListener("astro:after-swap", hamburgerToggle);
