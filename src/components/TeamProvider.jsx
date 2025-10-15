import { createContext, useContext, useState, useEffect } from "react";

const TeamContext = createContext();

export function TeamProvider({ children }) {
  const [team, setTeam] = useState(() => {
    const saved = localStorage.getItem("team");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("team", JSON.stringify(team));
  }, [team]);

  const addToTeam = (pokemon) => {
    if (team.length >= 6) {
      alert("Tu equipo está lleno (máximo 6 Pokémon).");
      return;
    }
    if (!team.some((p) => p.id === pokemon.id)) {
      setTeam([...team, pokemon]);
    }
  };

  const removeFromTeam = (id) => {
    setTeam(team.filter((p) => p.id !== id));
  };

  return (
    <TeamContext.Provider value={{ team, addToTeam, removeFromTeam }}>
      {children}
    </TeamContext.Provider>
  );
}

export const useTeam = () => useContext(TeamContext);
