import { useEffect, useState } from "react";
import { fetchPokemons } from "./api/pokeApi";
import { teamProvider } from "./components/Team";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0); // empieza en la página 0
  const [loading, setLoading] = useState(false);
  const limit = 12; // cuántos Pokémon por página

  useEffect(() => {
    const loadPokemons = async () => {
      setLoading(true);
      const data = await fetchPokemons(limit, page * limit);
      setPokemons(data);
      setLoading(false);
    };
    loadPokemons();
  }, [page]);

  return (
    <div style={{ background: "#1b1b1b", color: "#fff", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Pokédex</h1>

      {loading && <p style={{ textAlign: "center" }}>Cargando...</p>}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {pokemons.map((p) => (
          <div
            key={p.id}
            style={{
              background: "#2c2c2c",
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center",
              width: "180px",
            }}
          >
            <img src={p.image} alt={p.name} style={{ width: "100%" }} />
            <h3 style={{ textTransform: "capitalize" }}>{p.name}</h3>
            <p>Type: {p.type}</p>
          </div>
        ))}
      </div>

      {/* Controles de paginación */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          style={{
            marginRight: "10px",
            background: "#ffcb05",
            color: "#2a75bb",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
            opacity: page === 0 ? 0.5 : 1,
          }}
        >
          ← Anterior
        </button>

        <button
          onClick={() => setPage((p) => p + 1)}
          style={{
            background: "#2a75bb",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Siguiente →
        </button>
      </div>

      <p style={{ textAlign: "center", marginTop: "10px" }}>
        Página {page + 1}
      </p>
    </div>
  );
}

export default App;
