import { useState } from 'react';
import DisplayButton from './Game';

export default function StartPage() {
  const [start, setStart] = useState();
  const [hide, setHide] = useState('');

  const handleSetStart = () => {
    setStart(<DisplayButton />);
    setHide('none');
  };

  return (
    <>
      <div className="open-page" style={{ display: hide }}>
        <h1 className="game-title">ROCK PAPER SCISSORS</h1>
        <button className="start-game" onClick={handleSetStart}>
          <img src="startbutton.svg" alt="start-button" width="50px" />
        </button>
      </div>
      <div className="game">{start}</div>
    </>
  );
}
