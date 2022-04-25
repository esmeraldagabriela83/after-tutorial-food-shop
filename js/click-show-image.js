var buttons = document.querySelectorAll(".sliderClickButton button");
console.log("array cu buttons : ", buttons);

var divPhoto = document.querySelector("#containerImage");
console.log("div-ul cu clasa container in care vreau sa se afiseze cate o poza", divPhoto);

// divPhoto.style.fontSize = "1.5rem";
// divPhoto.style.color = "green";
divPhoto.style.textAlign = "center";
divPhoto.style.backgroundPosition = "center";
divPhoto.style.backgroundSize = "cover";
divPhoto.style.backgroundRepeat = "no-repeat";

for (var i = 0; i < buttons.length; i++) {

  buttons[i].addEventListener("click", function(event) {
    event.preventDefault();
    console.log("string din data-src : ", this.dataset.src);

    divPhoto.style.backgroundImage = "url(" + this.dataset.src + ")";
divPhoto.style.padding = "0 5em";
    divPhoto.firstElementChild.innerText = this.dataset.text;
    divPhoto.firstElementChild.style.color = "#785807";
    divPhoto.firstElementChild.style.fontWeight = "bold";
  })
}
