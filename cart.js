function newObject(func) {
  var args = Array.prototype.slice.call(arguments, 1);

  var object = Object.create(func.prototype);

  func.apply(object, args);

  return object;
}
//FOR PRODUCTS
var Product = function(id, name, price) {
  this.id = id;
  this.name = name;
  this.price = price;
}

Product.prototype = {
  toString: function() { return this.id + " " + this.name + " " + this.price }
}

////////////////////////////////////////////////////////////////////////////////
//FOR ITEMS
var Item = function(product) {
  this.product = product;
  this.count = 1;
  this.price = this.product.price*(this.count);
}

Item.prototype = {
  toString: function() { return this.product.toString() + " " + this.count + " " + this.price },
  updatePrice: function() { this.price = this.product.price*(this.count)}
}

////////////////////////////////////////////////////////////////////////////////
//FOR CARTS
var Cart = function () {
  this.items = [];
}

Cart.prototype = {
  toString: function() {
    var result = "";
    for(i=0; i< this.items.length; i++) {
      result += "Item " + (i+1) + ": " + this.items[i] + "\n";
    }
    return result;
  },
  getItems: function() {
    var result = [];
    for(i=0; i< this.items.length; i++) {
      result[i] = this.items[i];
    }
    return result;
  },
  hasProduct: function(productID) {
    for (i = 0; i < this.items.length; i++) {
      if (this.items[i].product.id == productID) {
        return true;
      }
    }
    return false;
  },
  addItem: function(product) {
    //console.log(product.id);
    for(i=0; i< this.items.length; i++) {
      if(this.items[i].product.id == product.id) {
        this.items[i].count ++;
        this.items[i].updatePrice();
        return;
      }
    }
      var temp = newObject(Product, product.id, product.name, product.price);
      //console.log(temp.toString());
      var temp2 = newObject(Item, temp, 1);
      this.items.push(temp2);
  },
  removeItem: function(productID) {
    for (var i = 0; i < this.items.length; i++) {
      if(this.items[i].product.id == productID) {
        if(this.items[i].count == 1) {
          this.items.splice(i,1);
        }
        else {
          this.items[i].count --;
          this.items[i].updatePrice();
          return;
        }
      }
      else {
        console.log("Error");
      }
    }
  },
  removeProduct: function(productID) {
    for (var i = 0; i < this.items.length; i++) {
      if(this.items[i].product.id == productID) {
        this.items.splice(i,1);
      }
    }
  },
  getItem: function(productID) {
    for (var i = 0; i < this.items.length; i++) {
      if(this.items[i].product.id == productID) {
        return this.items[i];
      }
    }
    return null;
  },
  getTotal: function() {
    var sum=0;
    for (var i = 0; i < this.items.length; i++) {
      sum += this.items[i].price;
    }
    return sum;
  },
  clearCart: function() {
      this.items.splice(0,this.items.length);
  }
}


exports.cartExport = {
  cart : Cart,
  product : Product,
  item : Item,
  newObject : function (func) {
    var args = Array.prototype.slice.call(arguments, 1);

    var object = Object.create(func.prototype);

    func.apply(object, args);

    return object;
  }
};


//For Testing
//var Milk1 = newObject(Product, 1213, "Milk1", 21.00);
//console.log(Milk1.toString());
//var Milk2 = newObject(Product, 1223, "Milk2", 25.00);
//console.log(Milk2.toString());
//var Milk3 = newObject(Product, 1233, "Milk3", 27.00);
//console.log(Milk3.toString());
//var Milk4 = newObject(Product, 1243, "Milk4", 20.00);
//console.log(Milk4.toString());

//var Item1 = newObject(Item, Milk1, 11);
//console.log(Item1.toString());
//var Item2 = newObject(Item, Milk2, 22);
//console.log(Item2.toString());
//var Item3 = newObject(Item, Milk3, 33);
//console.log(Item3.toString());
//var Item4 = newObject(Item, Milk4, 44);
//console.log(Item4.toString());

//var Cart1 = newObject(Cart);
//console.log(Cart1.toString());
//console.log(Cart1.getItems());
//console.log(Cart1.hasProduct(1253));
//console.log(Cart1.getItems());

//Cart1.addItem({id: 34, name: "Choco", price: 1});
//Cart1.addItem({id: 35, name: "Choco2", price: 2});
//Cart1.addItem({id: 36, name: "Choco3", price: 3});
//Cart1.addItem({id: 37, name: "Choco4", price: 4});

// Cart1.addItem({id: 34, name: "Choco", price: 23});
// Cart1.addItem({id: 34, name: "Choco", price: 23});
// Cart1.addItem({id: 34, name: "Choco", price: 23});
// Cart1.addItem({id: 34, name: "Choco", price: 23});
// Cart1.addItem({id: 34, name: "Choco", price: 23});
//Cart1.removeItem({id: 34, name: "Choco", price: 23});

//console.log(Cart1.getItems());
//Cart1.clearCart();
//console.log("here \n \n");
//console.log(Cart1.getItems());
//console.log(Cart1.toString());
