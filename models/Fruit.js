const fs = require("fs");
const path = require("path");
const fruits = require("./fruit.json");

class Fruit {
  constructor(fruit) {
    this.genus = fruit.genus;
    this.name = fruit.name;
    this.id = fruit.id;
    this.family = fruit.family;
    this.order = fruit.order;
    this.nutritions = fruit.nutritions;
  }
  static showAll() {
    return fruits.map((f) => new Fruit(f));
  }

  static show(name) {
    const fruit = fruits.find((f) => f.name.toLowerCase() == name);
    if (fruit) {
      return new Fruit(fruit);
    } else {
      throw new Error("The fruit does not exist");
    }
  }

  static create(data) {
    const newFruit = data;
    const fruit = fruits.find(
      (f) => f.name.toLowerCase() == data.name.toLowerCase(),
    );
    if(fruit) {
      throw new Error("This fruit already exist");
    } else {
      newFruit["id"] = fruits.length + 1;
      fruits.push(newFruit);

      return new Fruit(newFruit);
    }
  }

  update(data) {
    const updatedFruit = fruits.find((f) => f.name.toLowerCase() == this.name.toLowerCase(),);

    if (updatedFruit) {
      updatedFruit.name = data.name;
      updatedFruit.family = data.family;
      return new Fruit(updatedFruit);
    } else {
      throw new Error("This fruit does not exist");
    }
  }



  delete() {
    const index = fruits.findIndex((f) => f.name.toLowerCase() === this.name.toLowerCase());

    if (index !== -1) {
      const [deleted] = fruits.splice(index, 1);
      return deleted;
    } else {
      throw new Error("This fruit does not exist");
    }
  }

}



module.exports = Fruit;
