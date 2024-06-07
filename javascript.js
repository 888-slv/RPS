
//create computer choice function//
function getComputerChoice() {

let number = Math.ceil(Math.random() * 10)


if (number == 1 || number == 2 || number == 3 ) {
    result = "paper";
  } else if (number == 4 || number == 5 || number == 6 ) {
    result = "rock";
  } else {
    result = "scissors";

  }
}
//create human choice function//


let humanChoice = prompt('What do you choose?');

function getHumanChoice(){
    return humanChoice;
}

//ask human and log answer but also convert it to lowercase - this will make the comparison simpler//

getHumanChoice();
humanChoice = humanChoice.toLowerCase();
console.log(humanChoice);

//run game and log result then compare results and alert results

getComputerChoice();
console.log(result);



if ((humanChoice === 'rock' && result === 'paper') || (humanChoice === 'paper' && result === 'scissors') || (humanChoice === 'scissors' && result === 'rock')){
        alert('You loose');
    } else if ((humanChoice === 'rock' && result === 'scissors') || (humanChoice === 'paper' && result === 'rock') || (humanChoice === 'scissors' && result === 'paper')) {
        alert('You win')
     }     else {
        alert('Its a tie.')
     }




