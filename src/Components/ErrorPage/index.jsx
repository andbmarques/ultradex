import * as Styled from "./style";

const ErrorPage = () => {
  return <Styled.Container>
    <Styled.Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png" />
    <Styled.Message>
        Error: Pokemon Not Found!
    </Styled.Message>
  </Styled.Container>;
};

export default ErrorPage;
