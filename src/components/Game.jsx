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

function CreateButton({ setUser }) {
  return buttonChoices.map((eachButton) => {
    return (
      <>
        <ButtonProp
          name={eachButton}
          whenClick={(e) => {
            setUser(gameLogic(e.target.textContent, computerChoice()));
          }}
        />
      </>
    );
  });
}

export default function DisplayButton() {
  const [user, setUser] = useState('');

  return (
    <div>
      <p>{user}</p>
      <CreateButton setUser={setUser} />
    </div>
  );
}
