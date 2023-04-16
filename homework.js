//Task1
class Hamster {
  constructor(name) {
    this.name = name;
    this.owner = "";
    this.price = 15;
  }
  wheelRun() {
    console.log("Squeak squeak");
  }

  eatFood() {
    console.log("nibble nibble");
  }

  getPrice() {
    return this.price;
  }
}

//Task 2
class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getWeight() {
    return this.weight;
  }

  greet() {
    console.log(`Hello, My name is ${this.name}`);
  }

  eat(times = 1) {
    this.mood += 1 * times;
    this.weight += 3 * times;
  }

  excercise(times = 1) {
    this.weight -= 2 * times;
  }

  ageUp(times = 1) {
    this.age += 1 * times;
    this.height += 5 * times;
    this.weight += 4 * times;
    this.mood -= 1 * times;
    this.bankAccount += 10 * times;
  }

  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

//Task 3
const timmy = new Person("Timmy");
timmy.ageUp(5);
timmy.eat(5);
timmy.excercise(5);
timmy.ageUp(9);
const gus = new Hamster("Gus");
gus.owner = "Timmy";
timmy.buyHamster(gus);
timmy.ageUp(15);
timmy.eat(2);
timmy.excercise(2);
