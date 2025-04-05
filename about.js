// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });
  
  // Form validation
  function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return false;
    }
  
    alert("Thank you for reaching out!");
    return true;
  }
  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll("[data-target]");
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const testimonialGrid = document.querySelector('.testimonial-grid');
    const testimonials = document.querySelectorAll('.testimonial-grid blockquote');
    let currentIndex = 0;
  
    function scrollTestimonials() {
      currentIndex++;
      if (currentIndex >= testimonials.length) {
        currentIndex = 0; // Reset to the first testimonial
      }
      const offset = -currentIndex * 100; // Calculate the offset for scrolling
      testimonialGrid.style.transform = `translateX(${offset}%)`;
    }
  
    // Auto-scroll every 3 seconds
    setInterval(scrollTestimonials, 3000);
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
