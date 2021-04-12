// # The sea with some whirlpools (30 by 9)
// And to spice things up, add an X at the positions 25:2 and 7:9 and a 0 at the positions 6:4 and 18:7
//
// ```
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~X~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~0~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~0~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~X~~~~~~~~~~~~~~~~~~~~~~~
// ```

///// je sais pas pk il ne fonctionne pas ///

// let stars = "";
// let j; // hauteur
// let i; // longeur

// for (j = 0; j < 9; j++) {
//   for (i = 0; i < 30; i++) {
//     stars += "~";
//   }
//   if (j < 9) {
//     stars += "!!!\n";
//   }
// }
// console.log(stars);

let stars = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";

for (let i = 0; i < 9; i++) {
  console.log(stars);
}
