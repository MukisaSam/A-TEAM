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
