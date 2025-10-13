import CharacterCard from "./CharacterCard";
import "./CharacterList.css";

function CharacterList({ pokemons }) {
  return (
    <div className="pokemon-list">
      {pokemons.map((p) => (
        <CharacterCard key={p.id} pokemon={p} />
      ))}
    </div>
  );
}

export default CharacterList;
