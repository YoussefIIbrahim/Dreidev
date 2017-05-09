var cartFile = require('./cart.js');
var Cart = cartFile.cartExport.cart;
var Product = cartFile.cartExport.product;
var Item = cartFile.cartExport.item;
var newObject = cartFile.cartExport.newObject;

//For Testing

//To test getItems uncomment the following:
// var Cart1 = newObject(Cart);
// Cart1.addItem({id: 34, name: "Choco", price: 1});
// Cart1.addItem({id: 35, name: "Choco2", price: 2});
// Cart1.addItem({id: 36, name: "Choco3", price: 3});
// Cart1.addItem({id: 37, name: "Choco4", price: 4});
// console.log(Cart1.getItems());



//To test hasProduct uncomment the following:
// var Cart1 = newObject(Cart);
// Cart1.addItem({id: 34, name: "Choco", price: 1});
// Cart1.addItem({id: 35, name: "Choco2", price: 2});
// Cart1.addItem({id: 36, name: "Choco3", price: 3});
// Cart1.addItem({id: 37, name: "Choco4", price: 4});
// console.log(Cart1.hasProduct(34)); //true
// console.log(Cart1.hasProduct(4)); //false



//To test addItem uncomment the following:
// var Cart1 = newObject(Cart);
// Cart1.addItem({id: 34, name: "Choco", price: 1});
// console.log(Cart1.getItems());



//To test removeItem uncomment the following:
// var Cart1 = newObject(Cart);
// Cart1.addItem({id: 34, name: "Choco", price: 10});
// Cart1.addItem({id: 34, name: "Choco", price: 10});
// Cart1.addItem({id: 34, name: "Choco", price: 10});
// Cart1.addItem({id: 34, name: "Choco", price: 10});
// console.log(Cart1.getItems());
// Cart1.removeItem(34);
// console.log(Cart1.getItems());



//To test removeProduct uncomment the following:
// var Cart1 = newObject(Cart);
// Cart1.addItem({id: 34, name: "Choco", price: 10});
// Cart1.addItem({id: 34, name: "Choco", price: 10});
// Cart1.addItem({id: 34, name: "Choco", price: 10});
// Cart1.addItem({id: 34, name: "Choco", price: 10});
// console.log(Cart1.getItems());
// Cart1.removeProduct(34);
// console.log(Cart1.getItems());



//To test getItem uncomment the following:
// var Cart1 = newObject(Cart);
// Cart1.addItem({id: 34, name: "Choco", price: 1});
// Cart1.addItem({id: 35, name: "Choco2", price: 2});
// Cart1.addItem({id: 36, name: "Choco3", price: 3});
// Cart1.addItem({id: 37, name: "Choco4", price: 4});
// console.log(Cart1.getItem(36)); //actual data
// console.log(Cart1.getItem(388)); //null



//To test getTotal uncomment the following:
// var Cart1 = newObject(Cart);
// Cart1.addItem({id: 34, name: "Choco", price: 1});
// Cart1.addItem({id: 35, name: "Choco2", price: 2});
// Cart1.addItem({id: 36, name: "Choco3", price: 3});
// Cart1.addItem({id: 37, name: "Choco4", price: 4});
// console.log(Cart1.getTotal());



//To test clearCart uncomment the following:
// var Cart1 = newObject(Cart);
// Cart1.addItem({id: 34, name: "Choco", price: 1});
// Cart1.addItem({id: 35, name: "Choco2", price: 2});
// Cart1.addItem({id: 36, name: "Choco3", price: 3});
// Cart1.addItem({id: 37, name: "Choco4", price: 4});
// console.log(Cart1.getItems()); //filled with data
// Cart1.clearCart();
// console.log(Cart1.getItems()); //empty
