console.log("oooooooooooooooooooooooo----------------------circle pizza from circle-pizza-change-backgroundColor.js");

//Change Background color on Click | Javascript Beginner Project Tutorial
//https://www.youtube.com/watch?v=jznWWxPZkvQ

let colors=["teal" , "olive" , "tomato" , "chocolate", "gold" , "DarkGoldenRod" ];

let pizzaCircle=document.getElementById("pizza-circle");
console.log("pizzaCircle is : " , pizzaCircle);

let buttonChangeBackground=document.querySelector(".circle-pizza-btn");
console.log("buttonChangeBackground is : " , buttonChangeBackground);

buttonChangeBackground.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("click to change the background of the div");

  var randomColorPizza=colors[Math.floor(Math.random() * colors.length)];

  pizzaCircle.style.backgroundColor=randomColorPizza;
})

//
