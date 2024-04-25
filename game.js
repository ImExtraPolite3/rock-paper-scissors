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
  const allButtons = document.querySelectorAll('button');
  const display = document.querySelector('.display');
  const changeHumanScore = document.querySelector('.change-human-score');
  const changeComputerScore = document.querySelector('.change-computer-score');

  allButtons.forEach(eachButton => {
    eachButton.addEventListener('click', () => {
      const humanSelection = eachButton.textContent;
      const computerSelection = getComputerChoice();
      display.textContent = playRound(humanSelection, computerSelection);
      let check = playRound(humanSelection, computerSelection);

      if (humanScore < 5 && computerScore < 5) {
        if (check == 'you win') {
          humanScore++;
          changeHumanScore.textContent = humanScore;
        } else if (check == 'you lose') {
          computerScore++;
          changeComputerScore.textContent = computerScore;
        }
      }

      if (humanScore == 5) {
        display.textContent = 'Human wins the game';
      } else if (computerScore == 5) {
        display.textContent = 'Computer wins the game';
      }
    })
  });
}

playGame();