const machine = {
  litersOfCoffee: 0,

  fillWithLitersOfCoffee: function (liters) {
    this.litersOfCoffee += liters;
  },
  
  servcup: function (litreservie) {
    if ( this.litersOfCoffee >= litreservie) {
      this.litersOfCoffee -= litreservie;
      return true;
    } else {
      return false;
    }
  },
        
  expresso: function () {
    return this.servcup(0.08);
  },

  longCoffee: function () {
    return this.servcup(0.15);
  },
};

module.exports = machine;







