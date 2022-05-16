var divPhoto=document.getElementById('before-after-div-photo');
console.log("divPhoto is : " , divPhoto);
divPhoto.style.border=" no-repeat";
divPhoto.style.backgroundImage="url(./images/salad-1.jpg)";
divPhoto.style.backgroundPosition="center";
divPhoto.style.backgroundSize="cover";

var btnPhoto=document.getElementById('before-after-photo-btn');
console.log("btnPhoto is : " , btnPhoto);
btnPhoto.style.padding="1em";

function changePhotoTextBeforeAfter(event){
  if(this.innerText === "BEFORE SALAD"){
    this.innerText="AFTER SALAD";
    this.previousElementSibling.style.backgroundImage="url(./images/salad-2.jpg)";
  }else{
    this.innerText="BEFORE SALAD";
    this.previousElementSibling.style.backgroundImage="url(./images/salad-1.jpg)";
  }
}

btnPhoto.addEventListener("click" , changePhotoTextBeforeAfter);
