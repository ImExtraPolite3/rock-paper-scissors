import { useState } from 'react';

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
            setUser(e.target.textContent);
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
