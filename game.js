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

function playRound(humanChoice, ComputerChoice) {
  if (humanChoice == 'rock' && ComputerChoice == 'rock') {
    return 'tie';
  } else if (humanChoice == 'rock' && ComputerChoice == 'paper') {
    computerScore++;
    return 'you lose';
  } else if (humanChoice == 'rock' && ComputerChoice == 'scissors') {
    humanScore++;
    return 'you win';
  } else if (humanChoice == 'paper' && ComputerChoice == 'rock') {
    humanScore++
    return 'you win';
  } else if (humanChoice == 'paper' && ComputerChoice == 'paper') {
    return 'tie';
  } else if (humanChoice == 'paper' && ComputerChoice == 'scissors') {
    computerScore++;
    return 'you lose';
  } else if (humanChoice == 'scissors' && ComputerChoice == 'rock') {
    computerScore++;
    return 'you lose';
  } else if (humanChoice == 'scissors' && ComputerChoice == 'paper') {
    humanScore++;
    return 'you win';
  } else if (humanChoice == 'scissors' && ComputerChoice == 'scissors') {
    return 'tie';
  }
}

function playGame() {
  const rock = document.getElementById('rock');
  const paper = document.getElementById('paper');
  const scissors = document.getElementById('scissors');
  const display = document.querySelector('.display');

  if (humanScore < 5 || computerScore < 5) {
    rock.addEventListener('click', () => {
      const rockChoice = rock.textContent;
      const computerSelection = getComputerChoice();
  
      console.log(humanScore);
      display.textContent = playRound(rockChoice, computerSelection);
    });
  
    paper.addEventListener('click', () => {
      const paperChoice = paper.textContent;
      const computerSelection = getComputerChoice();
  
      console.log(humanScore);
      display.textContent = playRound(paperChoice, computerSelection);
    });
  
    scissors.addEventListener('click', () => {
      const scissorsChoice = scissors.textContent;
      const computerSelection = getComputerChoice();
  
      console.log(humanScore);
      display.textContent = playRound(scissorsChoice, computerSelection);
    });
  } else {
    if (humanScore === 5) {
      console.log('you win');
    } else if (computerScore === 5) {
      console.log('computer wins');
    }
  }
}

playGame();