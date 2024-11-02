function computerChoice() {
  const getNum = Math.floor(Math.random() * 3) + 1;

  return getNum === 1 ? 'rock' : getNum === 2 ? 'paper' : 'scissor';
}

function userChoice(clicked) {
  return clicked;
}

export { computerChoice, userChoice };
