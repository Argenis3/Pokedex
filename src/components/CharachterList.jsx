import React, { useEffect, useState } from "react";
import { fetchCharacters } from "../api/pokeApi";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacters()
      .then((data) => {
        // Ajusta según la forma del JSON. Por ejemplo: data.characters
        setCharacters(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando personajes...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="character-list">
      {characters.map((ch) => (
        <CharacterCard key={ch.id || ch.name} character={ch} />
      ))}
    </div>
  );
}
