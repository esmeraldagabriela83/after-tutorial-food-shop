console.log("show hide from pizza js");

var showBTN=document.querySelector("#showBTN");
showBTN.style.padding="1em";
showBTN.style.marginTop="3em";

var prev=showBTN.previousElementSibling;
prev.style.padding="1em";
prev.style.borderRadius="10px";
prev.style.boxShadow="1px 1px 1.5px 1.5px gray";
prev.style.backgroundImage="url(./images/slider-three-pizza.jpg)";//il citeste ca si cand ar fi scris in html
prev.style.backgroundRepeat="no-repeat";
prev.style.backgroundSize="cover";
prev.style.backgroundPosition="center";
prev.className="pizzaToggle";

var showContent=function(event){
   event.preventDefault();
   console.log("this" , this);

   if(prev !== null) {
      prev.classList.toggle('toggle');
    }
}

//click or mouseover
showBTN.addEventListener("click" , showContent);

//
