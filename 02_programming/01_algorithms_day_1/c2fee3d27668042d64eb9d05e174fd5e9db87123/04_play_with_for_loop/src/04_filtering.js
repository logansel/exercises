// ## Iteration on arrays with filter
//
// -  Create an array called `literalDigits` from `zero` to `nine` where each array entry is a spelled-out number;
// -  Using `length`, write on `stdout` each odd values of the table.

const litteralDigitsde = ["un","deux","trois","quatre","cinq","six","sept","huit","neuf"];

/*for ( let i = 0; i < litteralDigitsde.length ; i++){

    if ((litteralDigitsde[i].length)%2  !== 0);{
    console.log(litteralDigitsde[i]);
  }
}*/

const result = litteralDigitsde.filter(digit => ((digit.length)%2 !== 0));
//console.log(result);