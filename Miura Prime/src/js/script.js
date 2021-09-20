//Click Profile Menu
function menuClick() {
  var menu = document.getElementById('contentMenu');
  if (menu.style.display == "block") {
    menu.style.display = "none";
  }
  else { 
    menu.style.display = "block";
  }
}

//Carousel Main Titles
var slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mainTitles");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += ' active';
}


//Carousel Shows
const slider = document.querySelector('.content');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

var sectionIndex = 0;

leftArrow.addEventListener('click', function(){
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
});

rightArrow.addEventListener('click', function(){
    sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
});