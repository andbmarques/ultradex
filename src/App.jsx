import { useEffect, useState } from "react";
import { getPokemon, getPokemons, searchPokemon } from "./api";
import ErrorPage from "./Components/ErrorPage";
import Navbar from "./Components/Navbar";
import Pokedex from "./Components/Pokedex";
import SearchBar from "./Components/Searchbar";
import { FavoriteProvider } from "./Contexts/FavoritesContext";
import Theme from "./Styles/theme";

const favoritesKey = "f";

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const itemsPerPage = 30;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itemsPerPage, itemsPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemon(pokemon.url);
      });
      const result = await Promise.all(promises);
      setPokemons(result);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itemsPerPage));
    } catch (error) {
      console.log(error);
    }
  };

  const updateFavoritesPokemons = (name) => {
    const updateFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    favoriteIndex >= 0
      ? updateFavorites.splice(favoriteIndex, 1)
      : updateFavorites.push(name);
    setFavorites(updateFavorites);
    window.localStorage.setItem(favoritesKey, JSON.stringify(updateFavorites));
  };

  const loadFavoritesPokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
  };

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) fetchPokemons();
    else {
      setLoading(true);
      setNotFound(false);
      const result = await searchPokemon(pokemon);
      if (!result) {
        setLoading(false);
        setNotFound(true);
      } else {
        setPokemons([result]);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    loadFavoritesPokemons();
    fetchPokemons();
  }, [page]);

  return (
    <Theme>
      <FavoriteProvider
        value={{
          favoritesPokemons: favorites,
          updateFavoritesPokemons: updateFavoritesPokemons,
        }}
      >
        <Navbar />
        <SearchBar onSearchHandler={onSearchHandler} />
        {notFound ? (
          <ErrorPage />
        ) : (
          <Pokedex
            pokemons={pokemons}
            loading={loading}
            page={page}
            totalPages={totalPages}
            setPage={setPage}
          />
        )}
      </FavoriteProvider>
    </Theme>
  );
}

export default App;