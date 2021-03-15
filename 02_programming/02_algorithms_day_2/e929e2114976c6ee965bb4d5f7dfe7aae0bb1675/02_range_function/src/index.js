const tableau = [];
const tableau2 = [];
const tableau3 = [];

function range(nbre1, nbre2) {     

  if (nbre1 < nbre2) {
    for(let i= nbre1; i <= nbre2; i++) {
      tableau.push(i);
    }
    return tableau;

  } else if (nbre1 > nbre2){
    for(let i= nbre1; i >= nbre2; i--) {
      tableau2.push(i);
    } 
    return tableau2;

  } else {
    tableau3.push(nbre1);
  }
  return tableau3;
}

console.log(range(1,5));
console.log(range(20,1));
// Do not remove last lines, it is for tests
module.exports = range;
