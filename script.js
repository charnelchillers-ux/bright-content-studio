// Toggle mobile menu
function toggleMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'block';
  }
}

// Optional: Close mobile menu when clicking a link (on mobile)
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobile-menu').style.display = 'none';
  });
});
