function filter(array, str) {
  const tableauRetourner = [];
  

  for (let i = 0; i < array.length; i++){

    if((str === "even") && (array[i] % 2 === 0)){
      tableauRetourner.push(array[i]);
    } 
        
    else if ((str === "odd") && (array[i] % 2 !== 0)){
      tableauRetourner.push(array[i]);
    }

    else if ((str !== "even") && (str !== "odd")) {
      return array;
    }

  }
  return tableauRetourner;
}

const chips = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
console.log(filter(chips, "zizi"));



// do not remove this line, it is for tests
module.exports = filter;
