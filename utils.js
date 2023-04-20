// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  result = w*h
  return (w < 0 || h < 0) ? null : result
}

const perimeter = (w, h) => {
  result = 2*w + 2*h
  return (w < 0 || h < 0) ? null : result
}

const circleArea = r => {
  result = Math.PI*(r**2)
  return (r < 0 ? null : result)
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = (cart) => {
  cart = []
  return cart
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = (cart) => {
  return cart
}

const addItemToCart = (cart, item) => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === item.name) {
      cart[i].quantity += item.quantity;
      return cart;
    } 
  }
  cart.push(item);
  return cart;
}

const getNumItemsInCart = (cart) => {
  items = 0
  cart.forEach(item => {
    items += item.quantity;
  });
  return items;
}

const removeItemFromCart = (cart, item) => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === item.name) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return `${item} not found!`
}

const calcCartTotal = (cart) => {
  total = 0
  cart.forEach(item => {
    total += item.quantity * item.price;
  });
  return total;
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart, calcCartTotal
}
