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

function playRound(humanChoice, ComputerChoice) {
  if (humanChoice == 'rock' && ComputerChoice == 'rock') {
    return 'tie';
  } else if (humanChoice == 'rock' && ComputerChoice == 'paper') {
    return 'you lose';
  } else if (humanChoice == 'rock' && ComputerChoice == 'scissors') {
    return 'you win';
  } else if (humanChoice == 'paper' && ComputerChoice == 'rock') {
    return 'you win';
  } else if (humanChoice == 'paper' && ComputerChoice == 'paper') {
    return 'tie';
  } else if (humanChoice == 'paper' && ComputerChoice == 'scissors') {
    return 'you lose';
  } else if (humanChoice == 'scissors' && ComputerChoice == 'rock') {
    return 'you lose';
  } else if (humanChoice == 'scissors' && ComputerChoice == 'paper') {
    return 'you win';
  } else if (humanChoice == 'scissors' && ComputerChoice == 'scissors') {
    return 'tie';
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(); 
    console.log(playRound(humanSelection, computerSelection));

    if (playRound(humanSelection, computerSelection) == 'you win')  {
      humanScore++;
    } else if (playRound(humanSelection, computerSelection) == 'you lose') {
      computerScore++;
    }
  }

  console.log('human: ' + humanScore);
  console.log('computer: ' + computerScore);
}

playGame();