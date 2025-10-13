export async function fetchPokemons(limit = 20, offset = 0) {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    if (!resp.ok) throw new Error("Error al obtener pokemones");
    const data = await resp.json();

    const detailedPokemons = await Promise.all(
      data.results.map(async (p) => {
        const res = await fetch(p.url);
        const details = await res.json();
        return {
          id: details.id,
          name: details.name,
          image: details.sprites.other["official-artwork"].front_default,
          type: details.types.map((t) => t.type.name).join(", "),
        };
      })
    );

    return detailedPokemons;
  } catch (error) {
    console.error("Error en fetchPokemons:", error);
    throw error;
  }
}
