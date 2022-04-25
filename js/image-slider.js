/*image slider
 Javascript Image Slider with Next and Prev buttons | Html, Css and Javascript slider
 https://www.youtube.com/watch?v=uAAD3mmQGRQ&t=5s */

var slider_img=document.querySelector(".slider-img");

var images=["slider-one-pizza.jpg" , "slider-two-pizza.jpg" , "slider-three-pizza.jpg" , "slider-fourth-pizza.jpg"];

var i=0 ;//current image index

function prev(){
if(i<=0) i=images.length;
i--;
return setImg();
}

function next(){
  if(i>=images.length - 1) i=-1;
  i++;
  return setImg();
}

function setImg(){
  return slider_img.setAttribute("src" , "images/" + images[i]);
}
