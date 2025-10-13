import { createContext, useContext, useState } from "react";

const TeamContext = createContext();

export const useTeam = () => useContext(TeamContext);

export const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState([]);

  const addToTeam = (pokemon) => {
    if (team.length < 6 && !team.find(p => p.id === pokemon.id)) {
      setTeam([...team, pokemon]);
    }
  };

  const removeFromTeam = (id) => {
    setTeam(team.filter(p => p.id !== id));
  };

  return (
    <TeamContext.Provider value={{ team, addToTeam, removeFromTeam }}>
      {children}
    </TeamContext.Provider>
  );
};
