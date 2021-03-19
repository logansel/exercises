const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const clear = () => console.log("\x1B[2J\x1B[0f");
const ROCK =
  [
    "    ________        ",
    "---'   _ ,  |       ",
    "      (__(__)       ",
    "      (_____)       ",
    "      (____)        ",
    "---.__(___)         ",
  ];

const PAPER = 
  [
    "      _______       ",
    "----'    ____)____  ",
    "            _______)",
    "            _______)",
    "           _______) ",
    "----.__________)    ",
  ];

const  SCISSORS =
  [
    "    ____           ",
    "---'    |________  ",
    "     (__)________) ",
    "        _________) ",
    "      (____)       ",
    "---.__(___)        ",
  ]; 
function getRandomArbitrary(min, max) {
  return (Math.random() * (max - min) + min);
}

function EntiergetRandom() {
  let iaMoove = parseInt(getRandomArbitrary(1,4)).toString();
  if (iaMoove === "1"){
    ROCK.forEach(element => console.log(element));
  } else if (iaMoove === "2") {
    PAPER.forEach(element => console.log(element));
  } else if (iaMoove === "3") {
    SCISSORS.forEach (element => console.log(element));
  }
  return iaMoove;
}

function compare (playerMoove, iaMoove) {
  if ( (playerMoove  === "1" && iaMoove === "3") || (playerMoove  === "2" && iaMoove === "1") || (playerMoove  === "3" && iaMoove === "2")) {
    console.log("You win!");
  } if ( (playerMoove === "1" && iaMoove === "1") || (playerMoove === "2" && iaMoove === "2") || (playerMoove === "3" && iaMoove === "3" )){
    console.log("Equality");
  } if ( (playerMoove === "1" && iaMoove === "2") || (playerMoove === "2" && iaMoove === "3") || (playerMoove === "3" && iaMoove === "1" )){
    console.log("You Loose");
  }
  reader.question("Do you want replay this game? Y or N", (answer) => {
    
    if ( answer === "Y"){
      startGame();
    } else {
      console.log("Thanks for the game 😉");
      reader.close();
    }
  });
};

function game(playerMoove){
  
  if (playerMoove === "1"){
    clear();
    ROCK.forEach(element => console.log(element));
  } else if (playerMoove === "2") {
    clear();
    PAPER.forEach(element => console.log(element));
  } else if (playerMoove === "3") {
    clear();
    SCISSORS.forEach (element => console.log(element));
  } else{
    console.log("Mauvaise input");
    startGame();
  }
  
  EntiergetRandom();
  compare();
  
}

function startGame() {
  reader.question("What is your name? ", (name) => {
    console.log(`Hello ${name} ! ,Welcome to ShiFuMi !`);
    console.log("The movements available are\n");
    ROCK.forEach(element => console.log(element));
    PAPER.forEach(element => console.log(element));
    SCISSORS.forEach (element => console.log(element));

    reader.question("Choose your moove, Rock Paper Scissors? [1, 2, 3]", (game));
  });
}
startGame();


