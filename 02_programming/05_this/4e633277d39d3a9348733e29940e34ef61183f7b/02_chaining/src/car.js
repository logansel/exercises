// Complete and add needed car properties:
const car = {
  speed: 0,
  minutes : 0,
  distanceparcouru : 0,

  start: function () {
    this.speed = 0;
    this.minutes = 0;
    this.distanceparcouru = 0;
    return this;
  },

  changeSpeed: function (speed) {
    this.speed = speed;
    return this; // permet de faire le chaining, changez la  vitesse , renvoi l'objet au global (save).
  },

  drive: function(minutes) {
    this.distanceparcouru += (this.speed * minutes) / 60;
    return this;
  },

  showDistance: function () {
    console.log(`${this.distanceparcouru} Km`);
    return this;
  },
};


module.exports = car;
