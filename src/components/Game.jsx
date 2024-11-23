import { useState } from 'react';
import computerChoice from './computerChoice';
import gameLogic from './gameLogic';
import EndCondition from './EndCondition';

const buttonChoices = ['rock', 'paper', 'scissors'];
const buttonImages = ['rock.svg', 'paper.svg', 'scissors.svg'];

function ButtonProp({ name, whenClick, imgSource, endClick }) {
  return (
    <button className={`${name} ${endClick}`} onClick={whenClick} key={name}>
      <img src={imgSource} />
      {name}
    </button>
  );
}

function CreateButton({ setUser, setWins, setLoses, setAnimate }) {
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
                if (prevWins < 5) {
                  return prevWins + 1;
                } else {
                  return prevWins + 1;
                }
              });
              setAnimate('win 250ms both');
            } else if (playGame === 'computer wins') {
              setLoses((prevLose) => {
                if (prevLose < 5) {
                  return prevLose + 1;
                } else {
                  return prevLose + 1;
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
  const [condition, setCondition] = useState('');
  const [modal, setModal] = useState('none');

  const handleSetEndAnimation = () => {
    setAnimate('');
  };

  const checkEndCondition = () => {
    if (wins === 4) {
      setCondition('You Win');
      setModal('block');
    } else if (loses === 4) {
      setCondition('You Lose');
      setModal('block');
    }
  };

  const resetGame = () => {
    setUser('ROCK PAPER OR SCISSORS?');
    setWins(0);
    setLoses(0);
    setModal('none');
    setCondition('');
  };

  return (
    <>
      <div className="scores">
        <h3 className="wins">{`Player Score: ${wins}`}</h3>
        <h3 className="loses">{`Computer Score: ${loses}`}</h3>
      </div>
      <div className="display-round-result">
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
          setWins={(score) => {
            setWins(score);
            checkEndCondition();
          }}
          setLoses={(score) => {
            setLoses(score);
            checkEndCondition();
          }}
          setAnimate={setAnimate}
        />
      </div>
      <EndCondition condition={condition} reset={resetGame} modal={modal} />
    </>
  );
}
