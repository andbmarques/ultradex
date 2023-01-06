import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  padding: 2rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.Charcoal};
  padding: 1rem 0;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.Charcoal};
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

export const Text = styled.p`
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

export const MainContainer = styled.div``;

export const PokemonListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 740px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LoadingText = styled.p`
  margin: 1rem 0;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;