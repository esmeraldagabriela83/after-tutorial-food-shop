//for screen
var buttonsScreen = document.querySelectorAll(".sliderClickButton.slider-screen button");
console.log("array cu buttons screen : ", buttonsScreen);

var divPhotoScreen = document.querySelector("#containerImageScreen");
console.log("div-ul cu clasa container in care vreau sa se afiseze cate o poza for mobile", divPhotoScreen);

divPhotoScreen.style.textAlign = "center";
divPhotoScreen.style.backgroundPosition = "center";
divPhotoScreen.style.backgroundSize = "cover";
divPhotoScreen.style.backgroundRepeat = "no-repeat";

for (var i = 0; i < buttonsScreen.length; i++) {

  buttonsScreen[i].addEventListener("click", function(event) {
    event.preventDefault();
    console.log("string din data-src : ", this.dataset.src);

    divPhotoScreen.style.backgroundImage = "url(" + this.dataset.src + ")";
    divPhotoScreen.style.height = "22em";
    divPhotoScreen.style.width = "30em";
    divPhotoScreen.style.marginTop = "3em";
    divPhotoScreen.firstElementChild.innerText = this.dataset.text;
    divPhotoScreen.firstElementChild.style.color = "#785807";
    divPhotoScreen.firstElementChild.style.fontWeight = "bold";
    divPhotoScreen.firstElementChild.style.textAlign = "center";
  })
}

//////////////////////////////////////////////////////////////////////////////////////////////////
//for mobile
var buttonsMobile = document.querySelectorAll(".sliderClickButton.slider-mobile button");
console.log("array cu buttons mobile : ", buttonsMobile);

var divPhotoMobile = document.querySelector("#containerImageMobile");
console.log("div-ul cu clasa container in care vreau sa se afiseze cate o poza for mobile", divPhotoMobile);

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
