const john = {
  age: 18,
  canPersonDrink: function () {
    this.age > 21 ? true : false;
  },
};

console.log(john.canPersonDrink ());