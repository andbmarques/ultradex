const BASE_URL = "https://pokeapi.co/api/v2";

export const searchPokemon = async (pokemon) => {
  try {
    const response = await fetch(
      `${BASE_URL}/pokemon/${pokemon.toLowerCase()}`
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getPokemons = async (limit = 50, offset = 0) => {
  try {
    const response = await fetch(
      `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}}`
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getPokemon = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
