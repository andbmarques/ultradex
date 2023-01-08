import { useEffect, useState } from "react";
import { getPokemon, getPokemons, searchPokemon } from "./api";
import ErrorPage from "./Components/ErrorPage";
import Navbar from "./Components/Navbar";
import Pokedex from "./Components/Pokedex";
import SearchBar from "./Components/Searchbar";
import { FavoriteProvider } from "./Contexts/FavoritesContext";
import Theme from "./Styles/theme";
import { Route, Routes } from "react-router-dom";
import Favorites from "./Components/Favorites";
import { updateFavoritesPokemons } from "./Utils/updateFavoritesPokemons";
import { SearchProvider } from "./Contexts/SearchContext";
import PokemonPage from "./Components/PokemonPage";

const favoritesKey = "f";

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(30);
  const [searched, setSearched] = useState(false);

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
  }, [page, itemsPerPage]);

  return (
    <Theme>
      <FavoriteProvider
        value={{
          favoritesPokemons: favorites,
          setFavorites: setFavorites,
          updateFavoritesPokemons: updateFavoritesPokemons,
          favoritesKey: "f",
        }}
      >
        <SearchProvider
          value={{ searched: searched, setSearched: setSearched }}
        >
          <Navbar />
          <SearchBar onSearchHandler={onSearchHandler} />
          <Routes>
            <Route
              path="/"
              element={
                notFound ? (
                  <ErrorPage />
                ) : (
                  <Pokedex
                    pokemons={pokemons}
                    loading={loading}
                    page={page}
                    totalPages={totalPages}
                    setPage={setPage}
                    fetchPokemons={fetchPokemons}
                    itemsPerPage={itemsPerPage}
                    setItemsPerPage={setItemsPerPage}
                  />
                )
              }
            />
            <Route
              path="/favorites"
              element={<Favorites setLoading={setLoading} loading={loading} />}
            />
            <Route path="/:pokemonName" element={<PokemonPage />} />
          </Routes>
        </SearchProvider>
      </FavoriteProvider>
    </Theme>
  );
}

export default App;
