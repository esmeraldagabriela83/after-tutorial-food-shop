console.log("food tutorial");
//shopping cart
//https://www.youtube.com/watch?v=YeFzkC2awTM   JavaScript Shopping Cart Tutorial for Beginners    web dev simplified

//https://www.youtube.com/watch?v=-8LTPIJBGwQ   HTML & CSS Project Tutorial - Build a Recipes Website free code camp

//https://www.youtube.com/watch?v=8I5UCTlMa34   #9 of 25 Beginner Projects - HTML, CSS, & JavaScript - Grocery List ( Responsive Design ) codefoxx

if (document.readyState == `loading`) {
  document.addEventListener(`DOMContentLoaded`, ready);
} else {
  ready();
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName('btn-danger');
  console.log("the remove buttons are inside this array : ", removeCartItemButtons);
  for (i = 0; i < removeCartItemButtons.length; i++) {
    removeCartItemButtons[i].style.border = "3px solid cornflowerblue";
    //
    var button = removeCartItemButtons[i];
    button.style.padding = "1em 1.5em";
    button.style.color = "MintCream";
    button.addEventListener("click", removeCartItem);
  }
  /////////////////////////
  var quantityInputs = document.getElementsByClassName('cart-quantity-input');
  console.log("quantityInputs is an array : ", quantityInputs);
  for (var i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].style.border = "3px solid cornflowerblue";

    var input = quantityInputs[i];
    input.addEventListener("change", quantityChange);
  }
  /////////////////////////
  var addToCartButtons = document.getElementsByClassName('shop-item-button');
  console.log("Add to cart buttons are inside these array : ", addToCartButtons);
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }
  //
 document.getElementsByClassName('btn-purchase')[0].addEventListener("click" , purchaseClicked);
}

/////////////////////////////////////////////////////////////////////////////////////////

function purchaseClicked(event){
  alert("Thank you for your purchase");
  var cartItems=document.getElementsByClassName('cart-items')[0];
  while(cartItems.hasChildNodes()){
    cartItems.removeChild(cartItems.firstChild);
  };
  updateCartTotal();
}

/////
function removeCartItem(event) {
  console.log("you clicked on remove item button");

  var buttonClicked = event.target;
  console.log("buttonClicked is : ", buttonClicked);
  //buttonClicked.parentElement.parentElement.remove();
  //
  this.parentElement.parentElement.remove();

  updateCartTotal();
};
////

function quantityChange(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}
///

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;

  var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;

  var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;

  console.log("the price ,the title and the source image of the item I want to add in the cart are : ", price, title, imageSrc);

  addItemToCart(title, price, imageSrc);
  updateCartTotal();
}

///

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement(`div`);
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName('cart-items')[0];
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  console.log("cartItemNames is an array: ", cartItemNames);
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("this item is already added to the cart");
      return;
    }
  };
  var cartRowContents =
    `
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${imageSrc}" alt="shop-img from above" width="100" height="100">
      <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">REMOVE</button>
  </div>
  `;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow.getElementsByClassName("btn-danger")[0].addEventListener("click", removeCartItem);
  cartRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", quantityChange);
}

///
function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0];
  console.log("the cartItemContainer is : ", cartItemContainer);

  var cartRows = cartItemContainer.getElementsByClassName('cart-row');
  console.log("the cartRows is : ", cartRows);

  var total = 0;

  for (var i = 0; i < cartRows.length; i++) {

    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName('cart-price')[0];
    console.log("the priceElement is : ", priceElement);

    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
    console.log("the quantityElement is : ", quantityElement);
    console.log(priceElement, quantityElement);

    var price = parseFloat(priceElement.innerText.replace("$", ""));
    console.log("price is : ", price);

    var quantity = quantityElement.value;
    console.log("price * quantity is : ", price * quantity);

    total = total + (price * quantity);

  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText = `$` + total;
}

///
