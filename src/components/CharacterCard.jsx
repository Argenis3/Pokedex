import React from "react";

export default function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <h3>{character.name}</h3>
      {character.image && <img src={character.image} alt={character.name} style={{ width: "150px" }} />}
      <p>Especie: {character.species}</p>
      <p>Planeta: {character.planet}</p>
      {/* Puedes mostrar más campos si la API los incluye */}
    </div>
  );
}
