let container = document.querySelector(".container-comparison-slider");
let slider = document.querySelector(".container-comparison-slider .slider");

let before = document.querySelector(".image-container-original");
let after = document.querySelector(".image-container-edited");

let dragSlider = (e) => {
  let width = e.x - container.getBoundingClientRect().left;
  before.style.width = width + "px";
  slider.style.left = width + "px";
};

container.addEventListener("mousemove", dragSlider);
//How to Create Image Comparison Slider | HTML,CSS & JAVASCRIPT
//https://www.youtube.com/watch?v=Qlyrw0aXC44
