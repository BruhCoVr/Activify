document.getElementById('hamburger').addEventListener('click', function() {
  const menu = document.getElementById('menu');
  if (menu.style.display === 'flex') {
      menu.style.display = 'none';
  } else {
      menu.style.display = 'flex';
  }
});