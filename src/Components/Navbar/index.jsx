import React, { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import FavoritesContext from "../../Contexts/FavoritesContext";
import SearchContext from "../../Contexts/SearchContext";
import * as Styled from "./styles";

const Navbar = () => {
  const { favoritesPokemons } = useContext(FavoritesContext);
  const { setSearched } = useContext(SearchContext);
  const location = useLocation();

  const reload = () => {
    history.go(location.pathname);
  };

  return (
    <Styled.Container>
      {location.pathname === "/" ? (
        <Styled.NavLink
          onClick={() => {
            reload();
            setSearched(false);
          }}
        >
          <Styled.Logo />
        </Styled.NavLink>
      ) : (
        <Styled.NavLink
          onClick={() => {
            setSearched(false);
          }}
          to="/"
        >
          <Styled.Logo />
        </Styled.NavLink>
      )}
      <Styled.NavLinks>
        {location.pathname === "/" ? (
          <Styled.NavLink
            onClick={() => {
              reload();
              setSearched(false);
            }}
          >
            Home
          </Styled.NavLink>
        ) : (
          <Styled.NavLink
            onClick={() => {
              setSearched(false);
            }}
            to="/"
          >
            Home
          </Styled.NavLink>
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
