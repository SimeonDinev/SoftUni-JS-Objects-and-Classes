class Laptop {
  constructor(info, quality) {
    this.info = {
      producer: info.producer,
      age: info.age,
      brand: info.brand,
    };

    this.isOn = false;
    this.quality = quality;
    this.price = this.evaluatePrice();
  }

  turnOn() {
    this.quality -= 1;
    return (this.isOn = true);
  }
  turnOff() {
    this.quality -= 1;
    return (this.isOn = false);
  }

  showInfo() {
    return JSON.stringify(info);
  }

  evaluatePrice() {
    return 800 - info.age * 2 + this.quality * 0.5;
  }
}

let info = { producer: "Dell", age: 2, brand: "XPS" };
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);
