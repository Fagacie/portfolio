// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');

function showSlides() {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
  });
  currentSlide = (currentSlide + 1) % slides.length;
}

// Initialize slideshow
setInterval(showSlides, 3000);

// Progress Bar Animation
window.addEventListener('load', () => {
  document.querySelectorAll('.progress').forEach(bar => {
    bar.style.width = bar.dataset.skill;
  });
});
