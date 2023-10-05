const loadMore = (itemsToShow = 5, targetClass = ".item") => {
  const loadMoreButton = document.querySelector(".js-load-more");
  if (loadMoreButton) {
    loadMoreButton.addEventListener("click", () => {
      const hiddenItems = Array.from(
        document.querySelectorAll(`${targetClass}.hidden`),
      );
      hiddenItems.slice(0, itemsToShow).forEach((item) => {
        item.classList.remove("hidden");
      });
      if (hiddenItems.length <= itemsToShow) {
        loadMoreButton.style.display = "none";
      }
    });
  }
};

loadMore();
document.addEventListener("astro:after-swap", loadMore);
