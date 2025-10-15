import { useEffect, useState } from "react";
import { fetchPokemons } from "./api/pokeApi";
import CharacterList from "./components/CharachterList";
import TeamView from "./components/Team";
import SearchBar from "./components/SearchBar";


function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [page, setPage] = useState(0);
  const [view, setView] = useState("pokedex");
  const [loading, setLoading] = useState(false);
  const limit = 20; // cantidad por página

  useEffect(() => {
    loadMorePokemons();
  }, []);

  const loadMorePokemons = async () => {
    setLoading(true);
    const offset = page * limit;
    const newPokemons = await fetchPokemons(limit, offset);
    const allPokemons = [...pokemons, ...newPokemons];
    setPokemons(allPokemons);
    setFiltered(allPokemons);
    setPage((prev) => prev + 1);
    setLoading(false);
  };

  // 🔍 Búsqueda
  const handleSearch = (query) => {
    if (!query) setFiltered(pokemons);
    else
      setFiltered(
        pokemons.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
      );
  };

  return (
    <div
      style={{
        background: "#1b1b1b",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Pokédex</h1>

      {/* 🔘 Cambiar vista */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={() => setView("pokedex")}>Pokédex</button>
        <button onClick={() => setView("team")}>Mi Equipo</button>
      </div>

      {/* 📘 Pokédex */}
      {view === "pokedex" && (
        <>
          <SearchBar onSearch={handleSearch} />

          <CharacterList pokemons={filtered} />

          {/*  Botón “Cargar más Pokémon” */}
          {!loading && (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                onClick={loadMorePokemons}
                style={{
                  background: "#3b4cca",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Cargar más Pokémon
              </button>
            </div>
          )}

          {loading && <p style={{ textAlign: "center" }}>Cargando Pokémon...</p>}
        </>
      )}

      {/* 👥 Vista Equipo */}
      {view === "team" && <TeamView />}
    </div>
  );
}

export default App;

