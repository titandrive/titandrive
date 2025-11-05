document.addEventListener('click', (e) => {
  const pic = e.target.closest('picture');
  if (!pic) return;

  // Toggle zoom state
  if (pic.classList.contains('zoomed')) {
    pic.classList.remove('zoomed');
  } else {
    document.querySelectorAll('picture.zoomed')
      .forEach(p => p.classList.remove('zoomed'));
    pic.classList.add('zoomed');
  }
});
