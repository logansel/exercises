// ## A Rectangle of 10 by 10
//
// ```
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// ```

// ATTENTION IL FONCTIONNE BIEN MAIS PAS POUR LE TEST //////

// let stars = "";
// let j;
// let i;

// for (j = 0; j < 10; j++) {
//   for (i = 0; i < 10; i++) {
//     stars += "*";
//   }
//   if (j < i - 1) {
//     stars += "\n";
//   }
// }
// console.log(stars);

// let stars = "**********";

// for (let i = 0; i < 10; i++) {
//   console.log(stars);
// }

let txt = "";
for (let i = 1; i <= 10; i++) {
  txt += "*";
}
for (let j = 1; j < 10; j++) {
  console.log(txt);
}
console.log(txt);

/////autre facon ///

// let txt = "";
// let array = [];
// for(let i = 1; i <= 10; i++){
//   txt += "*";
// }
// for(let j = 1; j < 10; j++){
//   // console.log(txt);
//   array.push(txt);
// }
// //console.log(txt);
// console.log(array.join('\n'))
