const buttonChoices = ['rock', 'paper', 'scissors'];

function ButtonProp({ name }) {
  return (
    <div className={name} key={name}>
      {name}
    </div>
  );
}

function CreateButton() {
  return buttonChoices.map((eachButton) => {
    return (
      <>
        <ButtonProp name={eachButton} />;
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
