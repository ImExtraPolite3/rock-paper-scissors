import { useState } from 'react';
import computerChoice from './computerChoice';
import gameLogic from './gameLogic';

const buttonChoices = ['rock', 'paper', 'scissors'];

function ButtonProp({ name, whenClick }) {
  return (
    <button className={name} onClick={whenClick} key={name}>
      {name}
    </button>
  );
}

function CreateButton({ setUser, setWins, setLoses }) {
  return buttonChoices.map((eachButton) => {
    return (
      <>
        <ButtonProp
          name={eachButton}
          whenClick={(e) => {
            let playGame = gameLogic(e.target.textContent, computerChoice());
            setUser(playGame);

            if (playGame === 'player wins') {
              setWins((prevWins) => prevWins + 1);
            } else if (playGame === 'computer wins') {
              setLoses((prevLose) => prevLose + 1);
            }
          }}
        />
      </>
    );
  });
}

export default function DisplayButton() {
  const [user, setUser] = useState('Click button to start game');
  const [wins, setWins] = useState(0);
  const [loses, setLoses] = useState(0);

  return (
    <div className="game">
      <div className="scores">
        <h3 className="wins">{wins}</h3>
        <h3 className="loses">{loses}</h3>
      </div>
      <h1>{user}</h1>
      <CreateButton setUser={setUser} setWins={setWins} setLoses={setLoses} />
    </div>
  );
}
