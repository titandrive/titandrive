document.addEventListener("click", (e) => {
  const target = e.target;
  const node = target.closest("img"); // match current template output
  if (!node) return;

  if (node.classList.contains("zoomed")) {
    node.classList.remove("zoomed");
  } else {
    document.querySelectorAll("img.zoomed").forEach((el) => el.classList.remove("zoomed"));
    node.classList.add("zoomed");
  }
});
