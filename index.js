 let slideIndex = 0;
 showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 6000); // Change image every 6 seconds
}

function changeSlide(n) {
    slideIndex += n - 1;
    showSlides();
}

 //Dark mode toggle
 const darkModeToggle=document.getElementById("mode-toggle");
 darkModeToggle.addEventListener("click", function() { 1
    document.body.classList.toggle("dark-mode");
 });

 const navLinks = document.getElementById('links');

function toggleMenu() {
    navLinks.classList.toggle("show");
}

