console.log("change-image-using-on-click for home page");


function changeImage(){
  let displayImage=document.getElementById('onclickIMAGE1s');
  console.log("displayImage is : " , displayImage);
  if(displayImage.src.match("./images/pizza-1.jpg")){
    displayImage.src=`./images/pizza-2.jpg`;
  }else{
      displayImage.src=`./images/pizza-1.jpg`;
  }
}



















////
