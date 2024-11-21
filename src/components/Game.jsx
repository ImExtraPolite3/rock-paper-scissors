import { useState } from 'react';
import computerChoice from './computerChoice';
import gameLogic from './gameLogic';

const buttonChoices = ['rock', 'paper', 'scissors'];
const buttonImages = ['rock.svg', 'paper.svg', 'scissors.svg'];

function ButtonProp({ name, whenClick, imgSource }) {
  return (
    <button className={name} onClick={whenClick} key={name}>
      <img src={imgSource} />
      {name}
    </button>
  );
}

function CreateButton({
  setUser,
  setWins,
  setLoses,
  setAnimate,
  setEndCondition,
}) {
  return buttonChoices.map((eachButton, index) => {
    return (
      <>
        <ButtonProp
          imgSource={buttonImages[index]}
          name={eachButton}
          whenClick={(e) => {
            let playGame = gameLogic(e.target.textContent, computerChoice());
            setUser(playGame);

            if (playGame === 'player wins') {
              setWins((prevWins) => {
                if (prevWins < 4) {
                  return prevWins + 1;
                } else {
                  setEndCondition('you win');
                  return prevWins + 1;
                }
              });
              setAnimate('win 250ms both');
            } else if (playGame === 'computer wins') {
              setLoses((prevLose) => {
                if (prevLose < 4) {
                  return prevLose + 1;
                } else {
                  setEndCondition('you lose');
                  return prevLose;
                }
              });
              setAnimate('lose 100ms both 2');
            }
          }}
        />
      </>
    );
  });
}

export default function DisplayButton() {
  const [user, setUser] = useState('ROCK PAPER OR SCISSORS?');
  const [wins, setWins] = useState(0);
  const [loses, setLoses] = useState(0);
  const [animate, setAnimate] = useState('');
  const [endCondition, setEndCondition] = useState('for test');

  const handleSetEndAnimation = () => {
    setAnimate('');
  };

  return (
    <>
      <div className="scores">
        <h3 className="wins">{`Player Score: ${wins}`}</h3>
        <h3 className="loses">{`Computer Score: ${loses}`}</h3>
      </div>
      <div className="display-round-result">
        <p>{endCondition}</p>
        <h1
          style={{ animation: animate }}
          onAnimationEnd={handleSetEndAnimation}
        >
          {user}
        </h1>
      </div>
      <div className="game-buttons">
        <CreateButton
          setUser={setUser}
          setWins={setWins}
          setLoses={setLoses}
          setAnimate={setAnimate}
          setEndCondition={setEndCondition}
        />
      </div>
    </>
  );
}
