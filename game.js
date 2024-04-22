let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computer = Math.floor((Math.random() * 3) + 1);

  if(computer == 1) {
    return 'rock';
  } else if (computer == 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getHumanChoice() {
  let human = prompt('rock, paper, or scissor?');

  return human;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(); 

function playRound(humanChoice, ComputerChoice) {
  if(humanSelection == 'rock' && computerSelection == 'rock') {
  }
}