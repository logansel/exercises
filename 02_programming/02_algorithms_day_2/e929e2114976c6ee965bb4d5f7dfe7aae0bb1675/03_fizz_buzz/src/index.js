function fizzBuzz(list) {
  let tableau = [];
  for ( let i = 0; i < list.length; i++){
    if ( (list[i] % 3 === 0) && (list[i] % 5 === 0)){
      tableau.push("FizzBuzz");
    } 
    else if (list[i] % 3 === 0){
      tableaau.push("Fizz");
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






// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;