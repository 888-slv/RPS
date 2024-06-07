
//global variables

let humanChoice;
let computerChoice;
let result;

let humanScore = 0;
let computerScore = 0;
//

//function to get humanchoice
function getHumanChoice(){
  humanChoice = prompt('Rock, paper or scissors?');
    return humanChoice;
}
//

//function to get random computer choice
function getComputerChoice() {

let number = Math.ceil(Math.random() * 10)


if (number == 1 || number == 2 || number == 3 ) {
    computerChoice = "paper";
  } else if (number == 4 || number == 5 || number == 6 ) {
    computerChoice = "rock";
  } else {
    computerChoice = "scissors";

  }
}
//
//function to play one round and evaluate the results
function playRound() {
  getHumanChoice();
  humanChoice = humanChoice.toLowerCase()
console.log('You chose', humanChoice);

getComputerChoice();
console.log('The computer chose', computerChoice );

  if ((humanChoice === 'rock' && computerChoice === 'paper') || (humanChoice === 'paper' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'rock')){
    result = 'lost'; console.log('You loose.');
} else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
    result = 'won'; console.log('You win.')
 }     else if ((humanChoice === 'rock' && computerChoice === 'rock') || (humanChoice === 'paper' && computerChoice === 'paper') || (humanChoice === 'scissors' && computerChoice === 'scissors')) {
    result = 'tie'; console.log('Its a tie.');
 }
}

//
//function to keep score

function scoreKeep(){ 
  if (result == 'won') {humanScore = humanScore + 1}
  else if (result == 'lost') {computerScore = computerScore +1}
}
scoreKeep();
//

//function to play 5 rounds and announce the final result

function playGame(){
  playRound();scoreKeep();console.log('the score is ', humanScore, ':', computerScore);
  playRound();scoreKeep();console.log('the score is ', humanScore, ':', computerScore);
  playRound();scoreKeep();console.log('the score is ', humanScore, ':', computerScore);
  playRound();scoreKeep();console.log('the score is ', humanScore, ':', computerScore);
  playRound();scoreKeep();console.log('the final result is ', humanScore, ':', computerScore);
if (humanScore > computerScore){console.log('Congartulations, you won this game!')}
else if ( humanScore < computerScore) {console.log('You lost the game.')};
}
//

//run game
playGame();

//