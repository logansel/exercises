const greeter = {
  greet: function (name) {
    console.log(`hello ${name}!`);
    return this;
  },
};

greeter.greet("Joe").greet("Mike").greet("Robert");


console.log(greeter.greet("Joe").greet("Mike").greet("Robert")); 



const car = {
  speed: 0,
  distance: 0,
  
  start: function () {
    this.speed = 0;
    this.distance = 0;
    return this;
  },
  changeSpeed: function (newSpeed) {
    this.speed = newSpeed;
    return this;
  },
  drive: function (minutes) {
    this.distance += (this.speed * minutes) / 60;
    return this;
  },
  showDistance: function () {
    console.log(`${this.distance} Km`);
    return this;
  },
};