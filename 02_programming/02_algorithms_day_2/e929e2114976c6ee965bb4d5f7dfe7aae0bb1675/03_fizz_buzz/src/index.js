function fizzBuzz(list) {
  let tableau = [];
  for ( let i = 0; i < list.length; i++){
    if ( (list[i] % 3 === 0) && (list[i] % 5 === 0)){
      tableau.push("FizzBuzz");
    } 
    else if (list[i] % 3 === 0){
      tableau.push("Fizz");
    } 
    else if (list[i] % 5 === 0){
      tableau.push("Buzz");
    } 
    else {
      tableau.push(list[i]);
    }
  
  }
  return tableau;
}

const Prout = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(fizzBuzz(Prout));


// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;