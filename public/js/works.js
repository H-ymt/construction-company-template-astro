let itemsShown = 0;

const loadMore = (itemsToShow = 15) => {
  const loadMoreButton = document.querySelector(".js-load-more");
  if (loadMoreButton) {
    loadMoreButton.addEventListener("click", () => {
      const hiddenItems = document.querySelectorAll(`.js-hiddenArticle.hidden`);
      hiddenItems.forEach((item, index) => {
        if (index < itemsToShow) {
          item.classList.remove("hidden");
          itemsShown++;
        }
      });
      if (itemsShown >= hiddenItems.length) {
        loadMoreButton.style.display = "none";
      }
    });
  }
};

const addHiddenClassToNewElements = () => {
  const allElements = Array.from(document.body.children);
  allElements.slice(4).forEach((element) => {
    element.classList.add("hidden");
  });
};

addHiddenClassToNewElements();
loadMore();

document.addEventListener("astro:after-swap", () => {
  addHiddenClassToNewElements();
  loadMore();
});
