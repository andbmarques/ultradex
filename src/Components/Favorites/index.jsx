import * as Styled from "./style";
import Pokemon from "../Pokemon";
import capitalizer from "../../Utils/capitalizer";
import { useState, useEffect, useContext } from "react";
import FavoritesContext from "../../Contexts/FavoritesContext";
import { getPokemon } from "../../api";

const Favorites = ({ loading, setLoading }) => {
  const { favoritesPokemons, updateFavoritesPokemons } =
    useContext(FavoritesContext);
  const [favoriteList, setFavoriteList] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const promises = favoritesPokemons.map(async (pokemon) => {
        return await getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      });
      const result = await Promise.all(promises);
      setFavoriteList(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [favoritesPokemons]);

  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <Styled.Title>Favorites</Styled.Title>
      </Styled.HeaderContainer>
      <Styled.MainContainer>
        {loading ? (
          <Styled.LoadingText> Loading... </Styled.LoadingText>
        ) : (
          <Styled.PokemonListContainer>
            {favoriteList
              ? favoriteList.map((pokemon, index) => {
                  return <Pokemon data={pokemon} key={index} />;
                })
              : []}
          </Styled.PokemonListContainer>
        )}
      </Styled.MainContainer>
    </Styled.Container>
  );
};

export default Favorites;
