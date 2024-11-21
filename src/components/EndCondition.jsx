export default function EndCondition({ condition }) {
  return (
    <div className="end-condition">
      <h1>{condition}</h1>
      <button>Reset Game</button>
    </div>
  );
}
