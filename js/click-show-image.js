//for screen
var buttons = document.querySelectorAll(".sliderClickButton button");
console.log("array cu buttons : ", buttons);

var divPhoto = document.querySelector("#containerImage");
console.log("div-ul cu clasa container in care vreau sa se afiseze cate o poza", divPhoto);

divPhoto.style.textAlign = "center";
divPhoto.style.backgroundPosition = "center";
divPhoto.style.backgroundSize = "cover";
divPhoto.style.backgroundRepeat = "no-repeat";

for (var i = 0; i < buttons.length; i++) {

  buttons[i].addEventListener("click", function(event) {
    event.preventDefault();
    console.log("string din data-src : ", this.dataset.src);

    divPhoto.style.backgroundImage = "url(" + this.dataset.src + ")";
divPhoto.style.height = "22em";
divPhoto.style.width = "30em";
divPhoto.style.marginTop = "3em";
    divPhoto.firstElementChild.innerText = this.dataset.text;
    divPhoto.firstElementChild.style.color = "#785807";
    divPhoto.firstElementChild.style.fontWeight = "bold";
      divPhoto.firstElementChild.style.textAlign = "center";
  })
}
//////////////////////////////////////////////////////////////////////////////////////////////////
//for mobile
var buttonsMobile = document.querySelectorAll(".sliderClickButton.slider-mobile button");
console.log("array cu buttons : ", buttons);

var divPhotoMobile = document.querySelector("#containerImageMobile");
console.log("div-ul cu clasa container in care vreau sa se afiseze cate o poza", divPhoto);

divPhotoMobile.style.textAlign = "center";
divPhotoMobile.style.backgroundPosition = "center";
divPhotoMobile.style.backgroundSize = "cover";
divPhotoMobile.style.backgroundRepeat = "no-repeat";

for (var i = 0; i < buttonsMobile.length; i++) {

  buttonsMobile[i].addEventListener("click", function(event) {
    event.preventDefault();
    console.log("string din data-src : ", this.dataset.src);

  divPhotoMobile.style.backgroundImage = "url(" + this.dataset.src + ")";
divPhotoMobile.style.height = "15em";
divPhotoMobile.style.width = "20em";
divPhotoMobile.style.marginTop = "3em";
    divPhotoMobile.firstElementChild.innerText = this.dataset.text;
    divPhotoMobile.firstElementChild.style.color = "#785807";
    divPhotoMobile.firstElementChild.style.fontWeight = "bold";
    divPhotoMobile.firstElementChild.style.textAlign = "center";
  })
}
