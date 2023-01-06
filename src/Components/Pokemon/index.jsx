import * as Styled from "./style";
import capitalizer from "../../Utils/capitalizer";
import { useContext } from "react";
import FavoritesContext from "../../Contexts/FavoritesContext";

const Pokemon = ({ data }) => {
  const { favoritesPokemons, updateFavoritesPokemons } =
    useContext(FavoritesContext);

  const onHeartClick = () => {
    updateFavoritesPokemons(data.name);
  };

  const heart = favoritesPokemons.includes(data.name) ? (
    <Styled.SavedIcon />
  ) : (
    <Styled.SaveIcon />
  );

  return (
    <Styled.Container type={data.types[0].type.name}>
      <Styled.InfosContainer>
        <Styled.Name>{capitalizer(data.name)}</Styled.Name>
        <Styled.Types>
          {data.types.map((type, index) => (
            <Styled.Type type={type.type.name} key={index}>
              {capitalizer(type.type.name)}
            </Styled.Type>
          ))}
        </Styled.Types>
        <Styled.ButtonsContainer>
          <Styled.Id>{data.id}</Styled.Id>
          <Styled.SaveBtn onClick={onHeartClick}>
            {heart}
          </Styled.SaveBtn>
        </Styled.ButtonsContainer>
      </Styled.InfosContainer>
      <Styled.ImageContainer>
        <Styled.Image
          alt={data.name}
          src={data.sprites.other.home.front_default}
        />
      </Styled.ImageContainer>
    </Styled.Container>
  );
};

export default Pokemon;
