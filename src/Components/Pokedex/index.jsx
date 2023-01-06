import * as Styled from "./style";
import Pokemon from "../Pokemon";
import Pagination from "../Pagination";
import { useEffect } from "react";

const Pokedex = ({
  pokemons,
  loading,
  page,
  totalPages,
  setPage,
  fetchPokemons,
  setItemsPerPage,
}) => {
  const onLeftClick = () => {
    if (page > 0) setPage(page - 1);
    console.log(page);
  };

  const onRightClick = () => {
    if (page + 1 !== totalPages) setPage(page + 1);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <Styled.Title>Pokedex</Styled.Title>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClick}
          onRightClick={onRightClick}
          setItemsPerPage={setItemsPerPage}
        />
      </Styled.HeaderContainer>
      <Styled.MainContainer>
        {loading ? (
          <Styled.LoadingText> Loading... </Styled.LoadingText>
        ) : (
          <Styled.PokemonListContainer>
            {pokemons &&
              pokemons.map((pokemon, index) => {
                return <Pokemon data={pokemon} key={index} />;
              })}
          </Styled.PokemonListContainer>
        )}
      </Styled.MainContainer>
      <Styled.FooterContainer>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClick}
          onRightClick={onRightClick}
        />
      </Styled.FooterContainer>
    </Styled.Container>
  );
};

export default Pokedex;
