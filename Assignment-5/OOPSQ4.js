
class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  getDetails() {
    return this.brand + " " + this.model + " — ₹" + this.price.toLocaleString();
  }
}

const car1 = new Car("Mercedes", "C63", 125000);
const car2 = new Car("Honda", "NSX", 90000);
const car3 = new Car("Ford", "GT", 21000);

console.log(car1.getDetails());
console.log(car2.getDetails());
console.log(car3.getDetails());
console.log("-------------------------")