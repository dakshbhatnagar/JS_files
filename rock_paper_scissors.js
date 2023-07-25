const prompt = require("prompt-sync")();
let wins = 0;
let losses = 0;
let ties = 0;

while (true) {
  const playerChoice = prompt("Enter rock, paper, or scissors (or q to quit): ");

  if (playerChoice.toLowerCase() === "q") {
    break;
  }

  // Checking if the input is invalid or not
  if (!(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors")) {
    console.log("Please enter a valid choice.");
    continue;
  }

  // Creating a random choice for the computer using indexes in JavaScript and Math Module
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.round(Math.random() * 2);
  const computerChoice = choices[randomIndex];

  console.log("The computer chose:", computerChoice);

  if (computerChoice === playerChoice) {
    console.log("Draw!");
    // Increasing the ties count every time there's a draw
    ties++;
  } else if (
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("Won!");
    // Increasing the wins count every time the player wins
    wins++;
  } else {
    console.log("Lost!");
    // Increasing the loss count every time the player loses
    losses++;
  }
}

// Printing out the final result if the user chooses to quit
console.log("Wins:", wins, "Losses:", losses, "Ties:", ties);
