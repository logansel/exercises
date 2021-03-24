// There should be no import in this file. Only exports!

const longCoffee = () => {
  return this.serveACup(0.15);
};

const expresso = () => {
  return this.serveACup(0.08);
};



export {longCoffee, expresso};