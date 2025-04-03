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