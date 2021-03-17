function numberGame (reader, min = 1, max = 100) {

  const nbreAleatoire=  Math.round(Math.random() * (max - min) + min);
  console.log("You have to find the right number, between 1 and 100!");

  function loop ( number) {
    let numeroString = parseInt(number);

    if ( isNaN(numeroString)) {
      console.log("This was not a number");
      reader.question("Enter a number", (loop));
    } else if (numeroString < min || number > max) {
      console.log("The number is between 1 and 100");
      reader.question("Enter a number", (loop));
    } else if ( numeroString < nbreAleatoire) {
      console.log("Too low");
      reader.question("Enter a number", (loop));
    } else if ( numeroString > nbreAleatoire) {
      console.log("Too high");
      reader.question("Enter a number", (loop));
    } else if (numeroString === nbreAleatoire) {
      console.log("You won!");
      reader.close();
    }
  }
  reader.question("Enter a number", (loop));
}
module.exports = numberGame;

