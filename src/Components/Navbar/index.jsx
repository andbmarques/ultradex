import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import FavoritesContext from "../../Contexts/FavoritesContext";
import * as Styled from "./styles";

const Navbar = () => {
  const { favoritesPokemons } = useContext(FavoritesContext);
  const location = useLocation();

  const reload = () => {
    history.go(location.pathname);
  };

  return (
    <Styled.Container>
      {location.pathname === "/" ? (
        <Styled.NavLink onClick={reload}><Styled.Logo /></Styled.NavLink>
      ) : (
        <Styled.NavLink to="/"><Styled.Logo /></Styled.NavLink>
      )}
      <Styled.NavLinks>
        {location.pathname === "/" ? (
          <Styled.NavLink onClick={reload}>Home</Styled.NavLink>
        ) : (
          <Styled.NavLink to="/">Home</Styled.NavLink>
        )}
        <Styled.NavLink to="/favorites">
          Favorites{" "}
          {favoritesPokemons.length ? ` [${favoritesPokemons.length}] ` : ""}
        </Styled.NavLink>
        <Styled.NavLink>About</Styled.NavLink>
      </Styled.NavLinks>
    </Styled.Container>
  );
};

export default Navbar;
