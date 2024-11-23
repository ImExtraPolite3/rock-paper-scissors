import { useState } from 'react';

export default function EndCondition({ condition, reset, modal }) {
  return (
    <div className="end-condition" style={{ display: modal }}>
      <h1>{condition}</h1>
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset Game
      </button>
    </div>
  );
}
