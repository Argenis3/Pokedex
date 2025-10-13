import { useTeam } from "./TeamProvider";
import "./CharacterCard.css";

function CharacterCard({ pokemon }) {
  const { team, addToTeam, removeFromTeam } = useTeam();
  const isInTeam = team.some(p => p.id === pokemon.id);

  return (
    <div className="pokemon-card">
      <img src={pokemon.image} alt={pokemon.name} />
      <h3 className="pokemon-name">{pokemon.name}</h3>
      <p>Tipo: {pokemon.type}</p>

      {isInTeam ? (
        <button className="remove-btn" onClick={() => removeFromTeam(pokemon.id)}>
          Quitar del equipo
        </button>
      ) : (
        <button className="add-btn" onClick={() => addToTeam(pokemon)}>
          Agregar al equipo
        </button>
      )}
    </div>
  );
}

export default CharacterCard;
