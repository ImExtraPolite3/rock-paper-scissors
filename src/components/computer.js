export default function computerChoice() {
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  return computerChoice === 1
    ? 'rock'
    : computerChoice === 2
    ? 'paper'
    : 'scissors';
}
