// ===== Sticky header shadow on scroll =====
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===== Dark Mode Toggle =====
const toggleBtn = document.querySelector('#darkModeToggle');
toggleBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
