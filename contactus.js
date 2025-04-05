const navLinks = document.getElementById('links');

function toggleMenu() {
    navLinks.classList.toggle("show");
}
    const topText = document.getElementById("top");
const text = "Contact Us"; 
let i = 0;

function typeEffect() {
  if (i < text.length) {
    topText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 500);
  }
}
typeEffect();

const colors = ["blue", "yellow", "white", "lime", "cyan", "red"];
let colorIndex = 0;

setInterval(() => {
  topText.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}, 3000);

// Example: Add a simple alert when the form is submitted
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Thank you for signing up! We will keep you updated.');
});
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