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

function CreateButton({
  setResults,
  setWins,
  setLoses,
  setHide,
  setRoundWin,
  setAnimation,
  setPreventClick,
}) {
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
                setPreventClick('none');
                setRoundWin('You Win');
                setHide('');
              }

              setAnimation('win 250ms both');
              return Math.min(prevWins + 1, 5);
            });
          } else if (gameResults === 'computer wins') {
            setLoses((prevLoses) => {
              if (prevLoses === 4) {
                setPreventClick('none');
                setRoundWin('You lose');
                setHide('');
              }

              setAnimation('lose 100ms both 2');
              return Math.min(prevLoses + 1, 5);
            });
          } else {
            setAnimation('tie 300ms both');
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
  const [animation, setAnimation] = useState('');
  const [hide, setHide] = useState('none');
  const [roundWin, setRoundWin] = useState('');
  const [preventClick, setPreventClick] = useState('');
  const [reset, setReset] = useState('');

  const handleSetAnimationEnd = () => {
    setAnimation('');
  };

  return (
    <>
      <div className="game" style={{ pointerEvents: preventClick }}>
        <div className="scores">
          <h3>{`Player Score: ${wins}`}</h3>
          <h3>{`Computer Score: ${loses}`}</h3>
        </div>
        <div className="display-round-result">
          <h1
            style={{ animation: animation }}
            onAnimationEnd={handleSetAnimationEnd}
          >
            {results}
          </h1>
        </div>
        <div className="game-buttons">
          <CreateButton
            setResults={setResults}
            setWins={setWins}
            setLoses={setLoses}
            setHide={setHide}
            setRoundWin={setRoundWin}
            setAnimation={setAnimation}
            setPreventClick={setPreventClick}
          />
        </div>
      </div>
      <div className="game-end" style={{ display: hide }}>
        <h1>{roundWin}</h1>
        <button
          onClick={() => {
            setReset(() => {
              setResults('ROCK PAPER OR SCISSORS?');
              setWins(0);
              setLoses(0);
              setHide('none');
              setPreventClick('');
            });
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}
