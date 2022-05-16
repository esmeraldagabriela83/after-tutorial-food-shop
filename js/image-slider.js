////*image slider
 ////https://www.youtube.com/watch?v=uAAD3mmQGRQ
console.log("---------------------------------------------------image-slider.js");
var slider_img=document.querySelector(".slider-img");

var images=["slider-one-pizza.jpg" , "slider-two-pizza.jpg" , "slider-three-pizza.jpg" , "slider-fourth-pizza.jpg"];
console.log("images array from image-slider.js is : " , images);
var i=0 ;//current image index


var prevSLIDER=document.getElementById('prev-slider-btnPizza');
console.log("prevSLIDER from image-slider.js is : " , prevSLIDER);
prevSLIDER.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("previous");
  if(i<=0) i=images.length ;
  i--;
  return setImg();
})
//////////////////////////////////////////////////////////////////////////////////////////////


var nextSLIDER=document.getElementById('next-slider-btnPizza');
console.log("nextSLIDER from image-slider.js is : " , nextSLIDER);
nextSLIDER.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("next");
  if(i>=images.length -1) i=-1;
  i++;
  return setImg();
})
///////////////////////////////////////////////////////////////////////////////////////////////////

function setImg(){
  return slider_img.setAttribute("src" , "./images/" + images[i]);
}
