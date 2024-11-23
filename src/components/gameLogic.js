const conditions = ['player wins', 'computer wins', 'tie'];

export default function gameLogic(userChoice, computerChoice) {
  if (computerChoice === 'rock' && userChoice === 'rock') {
    return conditions[2];
  } else if (computerChoice === 'rock' && userChoice === 'paper') {
    return conditions[0];
  } else if (computerChoice === 'rock' && userChoice === 'scissors') {
    return conditions[1];
  } else if (computerChoice === 'paper' && userChoice === 'rock') {
    return conditions[1];
  } else if (computerChoice === 'paper' && userChoice === 'paper') {
    return conditions[2];
  } else if (computerChoice === 'paper' && userChoice === 'scissors') {
    return conditions[0];
  } else if (computerChoice === 'scissors' && userChoice === 'rock') {
    return conditions[0];
  } else if (computerChoice === 'scissors' && userChoice === 'paper') {
    return conditions[1];
  } else if (computerChoice === 'scissors' && userChoice === 'scissors') {
    return conditions[2];
  }
}
