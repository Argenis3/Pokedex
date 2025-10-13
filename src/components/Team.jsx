import React, { createContext, useContext, useState } from "react";

const TeamContext = createContext();

export function teamProvider({ children }) {
    const [team, setTeam] = useState([]);  //aquí se guradarán los personajes del equipo

    const addPokemon = (pokemon) => {
    // evitar duplicados (por ejemplo por nombre o id)
    setTeam((prev) => {
      if (prev.find((p) => p.id === pokemon.id)) {
        return prev;
      }
      return [...prev, pokemon];
    });
  };
   const removePokemon = (pkemonid) => {
    setTeam((prev) => prev.filter((p) => p.id !== pkemonid)); //filtra el equipo y elimina el personaje con el id dado
    };
    return (
        <TeamContext.Provider value={{ team, addPokemon, removePokemon }}>
            {children}
        </TeamContext.Provider>
    );
}

export function useTeam() {
    return useContext(TeamContext);
}