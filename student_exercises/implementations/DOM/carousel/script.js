const carouselSlide = document.querySelector('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 1;
let direction = -1;


        
images[0].addEventListener('load', () => {
  const slideWidth = images[0].clientWidth;
  carouselSlide.style.transform = `translateX(${direction*slideWidth * counter}px)`
})
const f = increase => {
  if(counter <= 0)
    {
      counter = images.length - 1
      }
      else
      {
        counter += increase ? -1 : 1
        }
        carouselSlide.style.transform = `translateX(${direction*images[0].clientWidth * counter}px)`
          }
prevBtn.addEventListener("click", () => {
  f(true)
})
nextBtn.addEventListener("click", () => {
f (false)
})
