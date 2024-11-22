import { useState } from 'react';

export default function EndCondition({ condition, reset }) {
  const [ifOpen, setIfOpen] = useState(true);

  return (
    <>
      {ifOpen && (
        <dialog className="end-condition" open>
          <h1>{condition}</h1>
          <button
            onClick={() => {
              reset();
              setIfOpen(false);
            }}
          >
            Reset Game
          </button>
        </dialog>
      )}
    </>
  );
}
