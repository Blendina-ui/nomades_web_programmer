const carouselSlide = document.querySelector('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 1;
let direction = -1;
images[0].addEventListener('load', () => {
  const slideWidth = images[0].clientWidth;
  carouselSlide.style.transform = `translateX(${direction*slideWidth * counter}px)`;
})