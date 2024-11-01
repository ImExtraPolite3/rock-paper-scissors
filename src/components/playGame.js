import computerChoice from './getComputer';

const gameConditions = ['player wins', 'computer wins', 'tie'];

export default function getUser(buttonName) {
  if (
    (computerChoice() === 'paper' && buttonName === 'paper') ||
    (computerChoice() === 'rock' && buttonName === 'rock') ||
    (computerChoice() === 'scissors' && buttonName === 'scissors')
  ) {
    console.log(gameConditions[2]);
  } else if (
    (computerChoice() === 'paper' && buttonName === 'rock') ||
    (computerChoice() === 'rock' && buttonName === 'scissor') ||
    (computerChoice() === 'scissors' && buttonName === 'paper')
  ) {
    console.log(gameConditions[1]);
  } else {
    console.log(gameConditions[0]);
  }
}
