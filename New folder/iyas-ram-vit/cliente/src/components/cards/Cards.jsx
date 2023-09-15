import Card from "../card/Card";
import style from "./cards.module.css"

export default function Cards({characters, onClose}) {
  return (
    <div className={style.cardsContainer}>
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
