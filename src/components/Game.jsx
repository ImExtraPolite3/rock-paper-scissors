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

function CreateButton({
  setUser,
  setWins,
  setLoses,
  setAnimate,
  setEndCondition,
}) {
  const [noClick, setNoClick] = useState('');

  return buttonChoices.map((eachButton, index) => {
    return (
      <>
        <ButtonProp
          imgSource={buttonImages[index]}
          endClick={noClick}
          name={eachButton}
          whenClick={(e) => {
            let playGame = gameLogic(e.target.textContent, computerChoice());
            setUser(playGame);

            if (playGame === 'player wins') {
              setWins((prevWins) => {
                if (prevWins < 4) {
                  return prevWins + 1;
                } else {
                  setEndCondition(
                    <EndCondition
                      condition={'You Win'}
                      reset={() => {
                        setWins(0);
                        setLoses(0);
                        setUser('ROCK PAPER OR SCISSORS?');
                        setNoClick('');
                      }}
                    />
                  );
                  setNoClick('end-click');
                  return prevWins + 1;
                }
              });
              setAnimate('win 250ms both');
            } else if (playGame === 'computer wins') {
              setLoses((prevLose) => {
                if (prevLose < 4) {
                  return prevLose + 1;
                } else {
                  setEndCondition(
                    <EndCondition
                      condition={'You Lose'}
                      reset={() => {
                        setWins(0);
                        setLoses(0);
                        setUser('ROCK PAPER OR SCISSORS?');
                        setNoClick('');
                      }}
                    />
                  );

                  setNoClick('end-click');
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
  const [endCondition, setEndCondition] = useState();

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
      <>{endCondition}</>
    </>
  );
}
