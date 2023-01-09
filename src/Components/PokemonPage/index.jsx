import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as Styled from "./style";
import { getPokemon } from "../../api";
import capitalizer from "../../Utils/capitalizer";
import { Ruler, Scales, Star } from "phosphor-react";
import ErrorPage from "../ErrorPage";

const PokemonPage = () => {
  const { pokemonName } = useParams();
  const [pokemonData, setPokemonData] = useState();

  const fetchPokemon = async () => {
    try {
      const data = await getPokemon(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      setPokemonData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const stringToNumber = (n) => {
    return n / 10;
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      {pokemonData ? (
        <Styled.Container>
          <Styled.Header>
            <Styled.Title>{`#${pokemonData.id}. ${capitalizer(
              pokemonData.name
            )}`}</Styled.Title>
            <Styled.BackButtonLink to="/">
              <Styled.BackButtonIcon />
            </Styled.BackButtonLink>
          </Styled.Header>
          <Styled.Main>
            <Styled.MainHeaderContainer>
              <Styled.MainInfosContainer>
                Name:
                <Styled.MainInfosText bordered>{`${capitalizer(
                  pokemonData.name
                )}`}</Styled.MainInfosText>
                <Styled.SpanCollection>
                  <Styled.Span>
                    <Styled.SpanLabel>
                        <Star weight="fill" style={{ marginRight: '0.4rem' }}/>
                        ID:
                    </Styled.SpanLabel>
                    <Styled.SpanValue>
                      {pokemonData.id}
                    </Styled.SpanValue>
                  </Styled.Span>
                  <Styled.Span>
                    <Styled.SpanLabel>
                        <Scales weight="regular" style={{ marginRight: '0.4rem' }}/>
                        WEIGHT:
                    </Styled.SpanLabel>
                    <Styled.SpanValue>
                      {stringToNumber(pokemonData.weight) + 'kg'}
                    </Styled.SpanValue>
                  </Styled.Span>
                  <Styled.Span>
                    <Styled.SpanLabel>
                        <Ruler weight="regular" style={{ marginRight: '0.4rem' }}/>
                        HEIGHT:
                    </Styled.SpanLabel>
                    <Styled.SpanValue>
                      {stringToNumber(pokemonData.height) + 'm'}
                    </Styled.SpanValue>
                  </Styled.Span>
                </Styled.SpanCollection>
                <Styled.MainInfosText label>Types:</Styled.MainInfosText>
                <Styled.Types>
                  {pokemonData.types.map((type, index) => (
                    <Styled.Type type={type.type.name} key={index}>
                      {capitalizer(type.type.name)}
                    </Styled.Type>
                  ))}
                </Styled.Types>
              </Styled.MainInfosContainer>
              <Styled.ImageContainer>
                <Styled.Image
                  src={pokemonData.sprites.other.home.front_default}
                />
                <Styled.ImageBackground type={pokemonData.types[0].type.name} />
              </Styled.ImageContainer>
            </Styled.MainHeaderContainer>
            <Styled.OtherInfosContainer></Styled.OtherInfosContainer>
          </Styled.Main>
        </Styled.Container>
      ) : <ErrorPage />}
    </>
  );
};

export default PokemonPage;
