const buttonChoices = ['rock', 'paper', 'scissors'];

function ButtonProp({ name }) {
  return (
    <button className={name} key={name}>
      {name}
    </button>
  );
}

function CreateButton() {
  return buttonChoices.map((eachButton) => {
    return (
      <>
        <ButtonProp name={eachButton} />
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
