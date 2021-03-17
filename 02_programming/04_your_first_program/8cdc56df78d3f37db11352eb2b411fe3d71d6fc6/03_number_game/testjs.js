const one = { text: "one", integer: 1 };
const two = { text: "two", integer: 2 };
const whichOne = { ...one, ...two };

console.log(whichOne.texte);