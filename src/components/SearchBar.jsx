// src/components/SearchBar.jsx
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    onSearch(value); // llama la función que filtra los pokémon
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Buscar Pokémon..."
        style={{
          padding: "10px 15px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          width: "250px",
          fontSize: "1rem",
        }}
      />
    </div>
  );
}

export default SearchBar;
