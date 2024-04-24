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
  const rock = document.getElementById('rock');
  const paper = document.getElementById('paper');
  const scissors = document.getElementById('scissors');

  rock.addEventListener('click', () => {
    console.log(rock.textContent);
  });

  paper.addEventListener('click', () => {
    console.log(paper.textContent);
  });

  scissors.addEventListener('click', () => {
    console.log(scissors.textContent);
  })
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
  // let humanScore = 0;
  // let computerScore = 0;

  getHumanChoice();
}

playGame();