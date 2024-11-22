import { useState } from 'react';

export default function EndCondition({ condition, reset }) {
  const [ifOpen, setIfOpen] = useState(true);

  return (
    <div className="end-condition" open={ifOpen}>
      <h1>{condition}</h1>
      <button
        onClick={() => {
          reset();
          setIfOpen(false);
        }}
      >
        Reset Game
      </button>
    </div>
  );
}
