const conditions = ['player wins', 'computer wins', 'tie'];

function gameLogic(userChoice, computerChoice) {
  if (
    (computerChoice === 'rock' && userChoice === 'rock') ||
    (computerChoice === 'paper' && userChoice === 'paper') ||
    (computerChoice === 'scissors' && userChoice === 'scissors')
  ) {
    return conditions[2];
  } else if (
    (computerChoice === 'rock' && userChoice === 'scissors') ||
    (computerChoice === 'paper' && userChoice === 'rock') ||
    (computerChoice === 'scissors' && userChoice === 'paper')
  ) {
    return conditions[1];
  } else {
    return conditions[0];
  }
}

export { gameLogic };
