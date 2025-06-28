const toggleButton = document.getElementById('toggle-mode');
const contactForm = document.getElementById('contactForm');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
});

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been received.I'll be in touch with you shortly.");
  contactForm.reset();
});
