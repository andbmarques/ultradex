import * as Styled from "./style";
import Pokemon from "../Pokemon";
import Pagination from "../Pagination";

const Pokedex = ({ pokemons, loading, page, totalPages, setPage }) => {
  const onLeftClick = () => {
    if (page > 0) setPage(page - 1);
    console.log(page)
  };

  const onRightClick = () => {
    if (page + 1 !== totalPages) setPage(page + 1);
  };

  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <Styled.Title>Pokedex</Styled.Title>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClick}
          onRightClick={onRightClick}
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
    </Styled.Container>
  );
};

export default Pokedex;
