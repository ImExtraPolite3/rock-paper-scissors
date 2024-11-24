const buttonName = ['rock', 'paper', 'scissors'];
const imgs = ['rock.svg', 'paper.svg', 'scissors.svg'];

function ButtonProp({ name, img, whenClick }) {
  return (
    <>
      <button className={name} onClick={whenClick}>
        <img src={img} alt={name} />
        <p>{name}</p>
      </button>
    </>
  );
}

function CreateButton() {
  return buttonName.map((eachButton, index) => {
    return (
      <ButtonProp
        key={index}
        name={eachButton}
        img={imgs[index]}
        whenClick={() => {
          console.log(eachButton);
        }}
      />
    );
  });
}

export default function Game() {
  return (
    <>
      <h1>Hello</h1>
      <CreateButton />
    </>
  );
}
