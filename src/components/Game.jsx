import { useState } from 'react';

const buttonChoices = ['rock', 'paper', 'scissors'];

function ButtonProp({ name, whenClick }) {
  return (
    <button className={name} onClick={whenClick} key={name}>
      {name}
    </button>
  );
}

function CreateButton() {
  const [user, setUser] = useState('');

  return buttonChoices.map((eachButton) => {
    return (
      <>
        <ButtonProp
          name={eachButton}
          whenClick={(e) => {
            setUser(e.target.textContent);
          }}
        />
      </>
    );
  });
}

export default function DisplayButton() {
  return (
    <div>
      <CreateButton />
    </div>
  );
}
