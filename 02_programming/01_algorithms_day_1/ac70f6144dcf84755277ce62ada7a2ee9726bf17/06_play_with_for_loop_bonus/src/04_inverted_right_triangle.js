// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```

let stars = "";
let stars2 = " ";

for (let i = 0; i < 5; i++) {
  stars += "*";
}
console.log(stars);

for (let i = 0; i < 4; i++) {
  stars = stars2 + stars.substring(0, stars.length - 1);
  console.log(stars);
}
