export default function EndCondition({ condition }) {
  return (
    <dialog open className="end-condition">
      <h1>{condition}</h1>
      <button>Reset Game</button>
    </dialog>
  );
}
