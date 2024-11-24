import { useState } from 'react';
import computerChoice from './computerChoice';
import gameLogic from './gameLogic';
const buttonName = ['rock', 'paper', 'scissors'];
const imgs = ['rock.svg', 'paper.svg', 'scissors.svg'];

function ButtonProp({ name, img, whenClick }) {
  return (
    <>
      <button className={name} onClick={whenClick}>
        <img src={img} alt={name} />
        <p>{name}</p>
      </button>
    </>
  );
}

function CreateButton({ setResults, setWins, setLoses }) {
  return buttonName.map((eachButton, index) => {
    return (
      <ButtonProp
        key={index}
        name={eachButton}
        img={imgs[index]}
        whenClick={() => {
          const gameResults = gameLogic(eachButton, computerChoice());
          setResults(gameResults);

          if (gameResults === 'player wins') {
            setWins((prevWins) => prevWins + 1);
          } else if (gameResults === 'computer wins') {
            setLoses((prevLoses) => prevLoses + 1);
          }
        }}
      />
    );
  });
}

export default function Game() {
  const [results, setResults] = useState('ROCK PAPER OR SCISSORS?');
  const [wins, setWins] = useState(0);
  const [loses, setLoses] = useState(0);

  return (
    <>
      <div className="scores">
        <p>{`Player Score ${wins}`}</p>
        <p>{`Computer Score ${loses}`}</p>
      </div>
      <h1>{results}</h1>
      <CreateButton
        setResults={setResults}
        setWins={setWins}
        setLoses={setLoses}
      />
    </>
  );
}
