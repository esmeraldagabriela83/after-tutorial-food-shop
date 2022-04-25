///////////////to show and hide sources links
console.log("footer show hide js file ");

  var sourceLink=document.querySelector(".btn_show_hide");
sourceLink.style.textAlign="center";

  var showHide=function(event){
      event.preventDefault();
    this.nextElementSibling.classList.toggle("hidden");
    console.log("next element is : " , this.nextElementSibling);
  }

  sourceLink.addEventListener("click" , showHide);
  console.log("sourceLink is : " , sourceLink);

  /////////////
