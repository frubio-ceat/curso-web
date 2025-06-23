
async function obtenerPokemon() {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

// Llamamos a la función asíncrona
obtenerPokemon();