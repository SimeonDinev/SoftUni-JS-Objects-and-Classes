class Storage {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = [];
    this.totalCost = 0;
  }

  addProduct(product) {
    this.storage.push(product);
    this.capacity -= product.quantity;
    this.totalCost = this.getPrice();
  }

  getProducts() {
    return this.storage.map((product) => JSON.stringify(product)).join("\n");
  }

  getPrice() {
    return this.storage.reduce((acc, curr) => {
      acc += curr.price * curr.quantity;
      return acc;
    }, 0);
  }
}

let productOne = { name: "Tomato", price: 0.9, quantity: 19 };
let productTwo = { name: "Potato", price: 1.1, quantity: 10 };
let storage = new Storage(30);
storage.addProduct(productOne);
storage.addProduct(productTwo);
console.log(storage.totalCost);
