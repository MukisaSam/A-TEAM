const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');

// Add click event to each gallery item
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        // Set the lightbox image source and caption
        lightboxImg.src = img.src;
        // Show the lightbox
        lightbox.style.display = 'flex';
    });
});

// Close the lightbox when the close button is clicked
 closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
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