function squareDigits(interger) {
  // ma fonction prend un integer
  return parseInt(interger = interger.toString().split("").map( number => String(parseInt(number)*parseInt(number))).join(""));

}

// Leave the line below for tests to work
module.exports = squareDigits;

















// split fonctionne que sur les string et on a ici des numbers