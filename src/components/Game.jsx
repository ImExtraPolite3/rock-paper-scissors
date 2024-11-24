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

function CreateButton({ setResults, setWins, setLoses, setHide, setRoundWin }) {
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
            setWins((prevWins) => {
              if (prevWins === 4) {
                setRoundWin('You Win');
                setHide('');
              }

              return Math.min(prevWins + 1, 5);
            });
          } else if (gameResults === 'computer wins') {
            setLoses((prevLoses) => {
              if (prevLoses === 4) {
                setRoundWin('You suck bozo');
                setHide('');
              }

              return Math.min(prevLoses + 1, 5);
            });
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
  const [hide, setHide] = useState('none');
  const [roundWin, setRoundWin] = useState('');
  const [reset, setReset] = useState('');

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
        setHide={setHide}
        setRoundWin={setRoundWin}
      />
      <div className="game-end" style={{ display: hide }}>
        <h1>{roundWin}</h1>
        <button
          onClick={() => {
            setReset(() => {
              setResults('ROCK PAPER OR SCISSORS?');
              setWins(0);
              setLoses(0);
              setHide('none');
            });
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}
