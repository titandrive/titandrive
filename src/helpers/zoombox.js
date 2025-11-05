// src/user/zoombox.js
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("click", () => {
    img.classList.toggle("zoomed");
  });
});
