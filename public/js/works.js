const loadMore = () => {
  const loadMoreButton = document.getElementById("js-load-more");
  if (loadMoreButton) {
    loadMoreButton.addEventListener("click", () => {
      const hiddenItems = document.querySelectorAll(".hidden");
      hiddenItems.forEach((item) => {
        item.classList.remove("hidden");
      });
      loadMoreButton.style.display = "none";
    });
  }
};

loadMore();
document.addEventListener("astro:after-swap", loadMore);
