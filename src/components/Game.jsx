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

function CreateButton({ setResults, setScore }) {
  return buttonName.map((eachButton, index) => {
    return (
      <ButtonProp
        key={index}
        name={eachButton}
        img={imgs[index]}
        whenClick={() => {
          setResults(gameLogic(eachButton, computerChoice()));
        }}
      />
    );
  });
}

export default function Game() {
  const [results, setResults] = useState('ROCK PAPER OR SCISSORS?');

  return (
    <>
      <h1>{results}</h1>
      <CreateButton setResults={setResults} />
    </>
  );
}
