/* Create Snake, Water & Gun game in JavaScript.
The game should ask you to enter S, W or G. 
The computer should be able to randomly generate S, W or G and declare win or loss using alert
Use alert, prompt and confirm whereever required!
*/

const prompt = require("prompt-sync")();

var userInput;

const choices = ['S','W','G'];
var randomIndex =  Math.round(Math.random())*2;
var computerChoice =  choices[randomIndex]
var playerScore = 0
var computerScore = 0
while (true) {
  let userInput = prompt('Enter your choice (S, W, G), or press "q" to exit:');
  if (userInput === 'q') {
    break; 
  }
  else{
  userInput = userInput.toUpperCase();
  if (userInput === 'S' || userInput === 'W' || userInput === 'G') {
    let result;

    if (userInput === computerChoice) {
      result = 'It\'s a draw!';
      console.log(result);
      playerScore++;
      computerScore++;
    } else if (
      (userInput === 'S' && computerChoice === 'W') ||
      (userInput === 'W' && computerChoice === 'G') ||
      (userInput === 'G' && computerChoice === 'S')
    ) {
      playerScore++;
      console.log(`You win and your current score is ${playerScore}`)
    } else {
      computerScore++;
      console.log(`Computer wins. Computer's current score is ${computerScore}`)
      }
    }
  }
}

if (playerScore> computerScore){
  console.log(`Congrats! You win with a final score : ${playerScore}`)
}
else if (playerScore< computerScore) {
  console.log(`Alas! Computer Wins with the final score : ${computerScore}`)
}
else {
  console.log('It\'s a tie!');
}