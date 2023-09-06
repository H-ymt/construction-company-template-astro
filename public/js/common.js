// 360px未満はviewportを固定
const setViewport = () => {
  const viewport = document.querySelector('meta[name="viewport"]');

  const switchViewport = () => {
    const value = window.outerWidth > 360 ? "width=device-width,initial-scale=1" : "width=360";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  };

  window.addEventListener("resize", switchViewport);
  switchViewport();
};

setViewport();
