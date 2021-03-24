// Here you can import functions from 'container' and 'drink'

import servcup  from "./container.js";
import { expresso, longCoffee } from "./drinks.js";

const machine = {
  litersOfCoffee: 0,
  fillWithLitersOfCoffee(),
  servcup(),
  expresso(),
  longCoffee(),
};

export {machine};