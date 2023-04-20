const mocha = require("mocha");
const chai = require("chai");
const utils = require("../utils");
const expect = chai.expect;

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello();
  expect(hello).to.be.a("string");
  expect(hello).to.equal("Hello");
  expect(hello).with.lengthOf(5);
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it("should return the area of a rectangle when w && h > 0", function() {
  const area = utils.area(2,5);
  expect(area).to.be.a("number");
  expect(area).to.equal(10);
})

it("should return null when w < 0", function() {
  const area = utils.area(-2,5);
  expect(area).to.be.null;
})

it("should return null when h < 0", function() {
  const area = utils.area(2,-5);
  expect(area).to.be.null;
})

it("should return the perimeter of a rectangle when w && h > 0", function() {
  const perimeter = utils.perimeter(2,5);
  expect(perimeter).to.be.a("number");
  expect(perimeter).to.equal(14);
})

it("should return null when w < 0", function() {
  const area = utils.perimeter(-2,5);
  expect(area).to.be.null;
})

it("should return null when h < 0", function() {
  const area = utils.perimeter(2,-5);
  expect(area).to.be.null;
})

it("should return the area of a circle when r > 0", function(){
  const areaOfCircle = utils.circleArea(5);
  expect(areaOfCircle).to.be.a("number");
  expect(areaOfCircle).to.equal(Math.PI*(5**2));
})

it("should return null when r < 0", function() {
  const area = utils.perimeter(-2,5);
  expect(area).to.be.null;
})

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart();
  done();
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99);
  expect(item).to.be.a("object");
  expect(item).to.have.property("name", "apple");
  expect(item).to.have.property("price", 0.99);
  expect(item).to.have.property("quantity", 1);
});

it("Should return an array containing all items in cart", function() {
  cart = [
    {"name": "apple", "price": 0.99, "quantity": 2},
    {"name": "banana", "price": 0.59, "quantity": 1}
  ];
  const cartItems = utils.getShoppingCart(cart);
  expect(cartItems).to.be.a("array");
  expect(cartItems.length).to.equal(2);
  expect(cartItems[0]).to.have.property("name", "apple");
  expect(cartItems[1]).to.have.property("name", "banana");
});

it("Should add a new item to the shopping cart", function() {
  cart = []
  const apple = utils.createItem("apple", 0.99);
  cart = utils.addItemToCart(cart, apple);
  cart = utils.addItemToCart(cart, apple);
  expect(cart.length).to.equal(1);
  expect(cart).to.be.a("array");
  expect(cart[0]).to.be.a("object");
  expect(cart[0]).to.have.property("name", "apple");
  expect(cart[0]).to.have.property("price", 0.99);
  expect(cart[0]).to.have.property("quantity", 2);
});

it("Should return the number of items in the cart", function() {
  cart = [];
  const apple = utils.createItem("apple", 0.99);
  const banana = utils.createItem("banana", 0.59);
  cart = utils.addItemToCart(cart, apple);
  cart = utils.addItemToCart(cart, apple);
  cart = utils.addItemToCart(cart, banana);
  number = utils.getNumItemsInCart(cart);
  expect(cart).to.be.a("array");
  expect(cart[0].quantity).to.equal(2);
  expect(cart[1].quantity).to.equal(1);
  expect(number).to.equal(3);
});

it("Should remove items from cart", function() {
  const apple = utils.createItem("apple", 0.99);
  cart = [
    {"name": "apple", "price": 0.99, "quantity": 2},
    {"name": "banana", "price": 0.59, "quantity": 1}
  ];
  cart = utils.removeItemFromCart(cart, apple)
  expect(cart).to.be.a("array");
  expect(cart.length).to.equal(1);
  expect(cart[0]).to.have.property("name", "banana");
  expect(cart[0]).to.have.property("price", 0.59);
  expect(cart[0]).to.have.property("quantity", 1);
});

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart", function() {
  const banana = utils.createItem("banana", 0.59);

  cart = [
    {"name": "apple", "price": 0.99, "quantity": 2},
    {"name": "banana", "price": 0.59, "quantity": 1}
  ];

  bananaQuantity = cart[1].quantity;
  numItemsBefore = utils.getNumItemsInCart(cart);
  cart = utils.removeItemFromCart(cart, banana);
  numItemsAfter = utils.getNumItemsInCart(cart);
  
  expect(banana).to.be.a("object");
  expect(bananaQuantity).to.equal(1);
  expect(numItemsBefore).to.be.a("number");
  expect(numItemsBefore).to.equal(3);
  expect(numItemsAfter).to.be.a("number");
  expect(numItemsAfter).to.equal(2);
  expect(cart).to.be.a("array");
  expect(numItemsBefore - numItemsAfter).to.equal(bananaQuantity);
});

it("Should validate that an empty cart has 0 items", function() {
  cart = [];
  number = utils.getNumItemsInCart(cart);
  expect(cart).to.be.a("array");
  expect(number).to.equal(0);
});

it("Should return the total cost of all items in the cart", function() {
  cart = [
    {"name": "apple", "price": 0.99, "quantity": 2},
    {"name": "banana", "price": 0.59, "quantity": 1}
  ];

  total = utils.calcCartTotal(cart);
  expect(total).to.be.a("number");
  expect(total).to.equal(2.57);
});