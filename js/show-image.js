//FOR SCREEN
var showBTNImage = document.querySelector("#showBTNImage");
showBTNImage.style.padding = "1em";
showBTNImage.style.marginTop = "1.5em";

var prevImage = showBTNImage.previousElementSibling;

prevImage.style.width = "30em";
prevImage.style.height = "22em";
prevImage.style.borderRadius = "10px";
prevImage.style.boxShadow = "1px 1px 1.5px 1.5px gray";
prevImage.style.backgroundImage = "url(./images/slider-fourth-pizza.jpg)"; //il citeste ca si cand ar fi scris in html
prevImage.style.backgroundRepeat = "no-repeat";
prevImage.style.backgroundSize = "cover";
prevImage.style.backgroundPosition = "center";


var showContentImage = function(event) {
  event.preventDefault();
  console.log("this", this);

  if (prevImage !== null) {
    prevImage.classList.toggle('toggleImage');
  }

  if (this.innerText !== null) {
    this.innerText = this.innerText == 'SHOW PIZZA' ?
      'HIDE PIZZA' : 'SHOW PIZZA';
  }
}

//click or mouseover
showBTNImage.addEventListener("click", showContentImage);
/////////////////////////////////////////////////////////////////////////////////////////////////
//FOR mobile

var showBTNImageMobile = document.querySelector("#showBTNImageMobile");
showBTNImageMobile.style.padding = "1em";
showBTNImageMobile.style.marginTop = "1.5em";

var prevImageMobile = showBTNImageMobile.previousElementSibling;

prevImageMobile.style.width = "20em";
prevImageMobile.style.height = "15em";
prevImageMobile.style.borderRadius = "10px";
prevImageMobile.style.boxShadow = "1px 1px 1.5px 1.5px gray";
prevImageMobile.style.backgroundImage = "url(./images/slider-fourth-pizza.jpg)"; //il citeste ca si cand ar fi scris in html
prevImageMobile.style.backgroundRepeat = "no-repeat";
prevImageMobile.style.backgroundSize = "cover";
prevImageMobile.style.backgroundPosition = "center";


var showContentImageMobile = function(event) {
  event.preventDefault();
  console.log("this", this);

  if (prevImageMobile !== null) {
    prevImageMobile.classList.toggle('toggleImageMobile');
  }

  if (this.innerText !== null) {
    this.innerText = this.innerText == 'SHOW PIZZA' ?
      'HIDE PIZZA' : 'SHOW PIZZA';
  }
}

//click or mouseover
showBTNImageMobile.addEventListener("click", showContentImageMobile);
