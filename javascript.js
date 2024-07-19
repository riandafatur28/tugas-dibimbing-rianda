let layer = document.querySelector('.layer');

// Untuk menambahkan fungsi scrolling pada bagian layer
window.addEventListener('scroll', function () {
  let value = window.scrollY;
  layer.style.left = value + 'px'; //70px
});
