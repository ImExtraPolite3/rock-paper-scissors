const buttonNames = ['rock', 'paper', 'scissors'];

function CreateButton({ name }) {
  return (
    <>
      <button className={name} key={name}>
        {name}
      </button>
    </>
  );
}

function DisplayButtons() {
  return buttonNames.map((eachButton) => {
    return (
      <>
        <CreateButton name={eachButton} />
      </>
    );
  });
}

export default function GameButtons() {
  return (
    <div>
      <DisplayButtons />
    </div>
  );
}
