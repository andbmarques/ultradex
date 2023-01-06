import * as Styled from "./styles";
import { useState } from "react";

const SearchBar = ({ onSearchHandler }) => {
  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if(e.target.value === 0) {
      onSearchHandler(undefined)
    }
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search.toLowerCase());
  };

  return (
    <Styled.Container>
      <Styled.InputContainer>
        <Styled.Input
          onChange={onChangeHandler}
          placeholder="Search a Pokémon"
        />
        <Styled.Button onClick={onButtonClickHandler} />
      </Styled.InputContainer>
    </Styled.Container>
  );
};

export default SearchBar;