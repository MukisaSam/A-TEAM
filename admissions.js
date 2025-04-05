document.addEventListener('DOMContentLoaded', () => {
    console.log('Admissions page loaded successfully.');
  
    // Example: Add interactivity for a future feature
    const ctaButton = document.querySelector('.cta .btn');
    ctaButton.addEventListener('click', () => {
      alert('Redirecting to the Contact Us page...');
    });
  });
const navLinks = document.getElementById('links');

function toggleMenu() {
    navLinks.classList.toggle("show");
}
document.addEventListener('DOMContentLoaded', () => {
  const modeToggle = document.getElementById('mode-toggle');
  const body = document.body;

  // Check for saved mode in localStorage
  const savedMode = localStorage.getItem('theme');
  if (savedMode === 'dark') {
    body.classList.add('dark-mode');
    modeToggle.classList.add('dark-ring'); // Add the white ring in dark mode
  }

  // Toggle dark and light mode
  modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      modeToggle.classList.add('dark-ring'); // Add the white ring
      localStorage.setItem('theme', 'dark'); // Save mode in localStorage
    } else {
      modeToggle.classList.remove('dark-ring'); // Remove the white ring
      localStorage.setItem('theme', 'light'); // Save mode in localStorage
    }
  });
});