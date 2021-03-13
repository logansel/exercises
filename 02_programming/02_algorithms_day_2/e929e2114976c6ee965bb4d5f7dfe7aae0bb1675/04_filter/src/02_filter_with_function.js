function isPair ( nbre1) {
  if ((nbre1 %2) === 0){
    return true;}
}

function isImpair ( nbre1) {
  if ((nbre1 %2) !== 0){
    return true;}
}

function filter(array, fn) {
  const tableauRetourner = [];
  
  for (let i = 0; i < array.length; i++){
    if (fn(array[i]) === true ){
      
      tableauRetourner.push(array[i]);
    }
  }
  return tableauRetourner;
}

/*const prout = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(filter(prout,isImpair));*/


// do not remove this line, it is for tests
module.exports = filter;