import { useState } from 'react';

export default function EndCondition({ condition, reset, ifOpen }) {
  return (
    <div className="end-condition" style={{ display: ifOpen }}>
      <h1>{condition}</h1>
      <h1>{ifOpen}</h1>
      <button
        onClick={() => {
          ifOpen;
          reset();
        }}
      >
        Reset Game
      </button>
    </div>
  );
}
