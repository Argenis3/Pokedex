import { useTeam } from "./TeamProvider";
import CharacterCard from "./CharacterCard";

function TeamView() {
  const { team } = useTeam();

  return (
    <div style={{ padding: "20px", color: "#fff" }}>
      <h2>Mi equipo ({team.length}/6)</h2>
      {team.length === 0 ? (
        <p>No tienes ningún Pokémon en tu equipo aún.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {team.map((pokemon) => (
            <CharacterCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TeamView;
