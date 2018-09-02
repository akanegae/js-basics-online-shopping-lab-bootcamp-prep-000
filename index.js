var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

//1
function addToCart(item) {
  var price = Math.floor(Math.random() *  100) + 1;
  cart.push(new Object({[item]: price}));
  console.log(`${item} has been added to your cart.`);
  return cart;
}

//2
function viewCart() {
  if (cart.length === 0);
  console.log("Your shopping cart is empty.");
} else {
  var items = [];
  for (let i = 0; i < cart.length; i++) {
    for(var item in cart[i]){
      items.push(item + " at $" + cart[i][item]);
    }
  }
  console.log("In your cart, you have" + items.join(", ") + ".");
}

//3
function total() {
  let t = 0;
  return t;
}

//4
function removeFromCart(item) {
  for (let i = cart.length; i >=0; i--) {
    if (cart.length[i] >= 0) {
      cart.splice(i, 1);
    }
    return cart;
  }
}
