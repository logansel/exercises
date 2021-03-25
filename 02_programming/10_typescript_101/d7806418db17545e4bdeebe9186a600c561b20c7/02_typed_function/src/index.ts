type test= [string, number];

function handleTuple(test: [string, number]): void{
  for(let i =0; i<=test.length; i++){
    if (typeof test[i] === "string") {
      console.log( `${test[i]} is a string`)
    } else if (typeof test[i] === "number" ) {
      console.log(`${test[i]} is a number`)
    } 
  }
}


// Leave the line below for tests to work properly.
export { handleTuple };
