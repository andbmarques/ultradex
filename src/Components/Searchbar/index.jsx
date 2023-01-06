import * as Styled from "./styles";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchContext from "../../Contexts/SearchContext";

const SearchBar = ({ onSearchHandler }) => {
  const { setSearched } = useContext(SearchContext);
  const [search, setSearch] = useState("");
  const location = useLocation();

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value === 0) {
      onSearchHandler(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search.toLowerCase());
    setSearch("");
    setSearched(true);
  };

  return (
    <Styled.Container location={location}>
      <Styled.InputContainer>
        <Styled.Input
          onChange={onChangeHandler}
          placeholder="Search a Pokémon"
          value={search}
        />
        <Styled.Button onClick={onButtonClickHandler} />
      </Styled.InputContainer>
    </Styled.Container>
  );
};

export default SearchBar;
