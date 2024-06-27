const carouselSlide = document.querySelector('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 0;
let direction = -1;
images[0].addEventListener('load', () => {
  const slideWidth = images[0].clientWidth;

  const translateDiv = (direction, slideWidth) => {
    if(counter === 0 && direction === -1)
      counter = images.length

    if(counter === images.length-1 && direction === 1){
      counter = -1
    }

    counter = (counter + direction)
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
  }
  
  nextBtn.addEventListener("click", () => {
    direction = 1
    translateDiv(direction, slideWidth)
  })
  prevBtn.addEventListener("click", () => {
    direction = -1
    translateDiv(direction, slideWidth)
  })
})