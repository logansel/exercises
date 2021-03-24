// const readline = require("readline");
​
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
​
const reverseString = (str) => str.split("").reverse().map(reverseParenthesis).join("");
​
function reverseParenthesis(element) {
  if (element === "(") {
    return ")";
  } else if (element === ")") {
    return "(";
  } else if (element === "<") {
    return ">";
  } else if (element === ">") {
    return "<";
  } else {
    return element;
  }
}
​
const rockSymbol = [
  "    ________ ",
  "---'   _ ,  |",
  "      (__(__)",
  "      (_____)",
  "      (____) ",
  "---.__(___)  ",
];
​
const paperSymbol = [
  "      _______       ",
  "----'    ____)____  ",
  "            _______)",
  "            _______)",
  "           _______) ",
  "----.__________)    ",
];
​
const scissorsSymbol = [
  "    ____          ",
  "---'    |________ ",
  "     (__)________)",
  "        _________)",
  "      (____)      ",
  "---.__(___)       ",
];
​
const symbols = ["rock", "paper", "scissors"];
​
const moves = {
  symbols,
  rock: rockSymbol,
  paper: paperSymbol,
  scissors: scissorsSymbol,
};
​
const printSymbol = (playerName, playerNum, moveName) => {
  console.log(playerName);
  moves[moveName].forEach((line) => console.log(playerNum === 1 ? line : reverseString(line)));
};
​
const randomMove = () => moves.symbols[Math.floor(Math.random() * moves.symbols.length)];
​
const getCpuMove = () => randomMove();
​
const winner = (players, firstPlayerMove, secondPlayerMove) => {
  if (firstPlayerMove === secondPlayerMove) {
    return "draw";
  }
  if (firstPlayerMove === "rock") {
    if (secondPlayerMove === "scissors") {
      return players[0];
    }
    return players[1];
  }
  if (firstPlayerMove === "scissors") {
    if (secondPlayerMove === "paper") {
      return players[0];
    }
    return players[1];
  }
  if (firstPlayerMove === "paper") {
    if (secondPlayerMove === "rock") {
      return players[0];
    }
    return players[1];
  }
};
​
function twoPlayers() {
  reader.question("Enter first player's name\n>", (firstPlayerName) => {
    reader.question("Enter second player's name\n>", (secondPlayerName) => {
      reader.question(`${firstPlayerName} Choose a move:\nRock Paper Scissors? [1, 2, 3]\n> `, (firstPlayerChoice) => {
        const firstPlayerMove = moves.symbols[firstPlayerChoice - 1];
        reader.question(
          `${secondPlayerName} Choose a move:\nRock Paper Scissors? [1, 2, 3]\n> `,
          (secondPlayerChoice) => {
            const secondPlayerMove = moves.symbols[secondPlayerChoice - 1];
            printSymbol(firstPlayerName, 1, firstPlayerMove);
            printSymbol(secondPlayerName, 2, secondPlayerMove);
            const result = winner([firstPlayerName, secondPlayerName], firstPlayerMove, secondPlayerName);
            console.log(result === "draw" ? "It's a draw!" : `${result} won!!`);
            reader.question("\nPlay again ?(Y,n)\n> ", (replay) => {
              if (replay.toLowerCase() === "n") {
                console.log("Thanks for the game 😉");
                reader.close();
              } else {
                twoPlayers();
              }
            });
          },
        );
      });
    });
  });
}
​
function vsCpu() {
  reader.question("Choose a move:\nRock Paper Scissors? [1, 2, 3]\n> ", (move) => {
    if (isNaN(move)) {
      console.log("This is not a number!");
      vsCpu();
    }
    const playerMove = moves.symbols[move - 1];
    if (!playerMove) {
      console.log("choose between 1 and 3 please 😅");
      vsCpu();
    }
    const cpuMove = getCpuMove();
    printSymbol("Player", 1, playerMove);
    printSymbol("Cpu", 2, cpuMove);
    const result = winner(["Player", "Cpu"], playerMove, cpuMove);
    console.log(result === "draw" ? "It's a draw!" : `The ${result} won!!`);
    reader.question("\nPlay again ?(Y,n)\n> ", (replay) => {
      if (replay.toLowerCase() === "n") {
        console.log("Thanks for the game 😉");
        reader.close();
      } else {
        vsCpu();
      }
    });
  });
}
​
function play() {
  const rules = ["Versus CPU", "Two players single game"]
    .map((r, i) => `${i + 1} - ${r}`)
    .join("\n");
  reader.question("How do you want to play?\n" + rules + "\nChoose a number\n> ", (gameType) => {
    if (gameType == 1) {
      vsCpu();
    }
    if (gameType == 2) {
      twoPlayers();
    }
  });
}
​
console.log("Hello!\nWelcome to the ShiFuMi!");
play();

