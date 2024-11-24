const conditions = ['player wins', 'computer wins', 'tie'];

export default function gameLogic(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return conditions[2];
  }

  const winningPairs = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  return winningPairs[userChoice] === computerChoice
    ? conditions[0]
    : conditions[1];
}
