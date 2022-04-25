/*image slider
  Javascript Image Slider with Next and Prev buttons | Html, Css and Javascript slider
  https://www.youtube.com/watch?v=uAAD3mmQGRQ&t=5s */

  var slider_imgme=document.querySelector(".myslider-img");

  var imagesPizza=["images/before-mySlider.jpg" , "images/after-mySlider.jpg"];

var i=0 ;//current image index

  function beforeFunction(){
  // if(i<=0) i=imagesPizza.length;
  // i--;
  if(i<=0) i=imagesPizza.length ;i--
{  return setImgPizza();}
  }

  function afterFunction(){
    // if(i>=imagesPizza.length - 1) i=-1;
    // i++;
      if(i>=imagesPizza.length - 1 )i=-1 ; ;i++
  {  return setImgPizza();}
  }

  function setImgPizza(){
    //document.getElementById('images').src=imagesPizza[i];
    //return slider_imgme.setAttribute("src" , "images/" + imagesPizza[i]);
    return slider_imgme.src=imagesPizza[i];
  }
