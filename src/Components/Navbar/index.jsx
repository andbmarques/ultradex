import React, { useContext } from "react";
import FavoritesContext from "../../Contexts/FavoritesContext";
import * as Styled from './styles';

const Navbar = () => {

    const { favoritesPokemons } = useContext(FavoritesContext);

    return (
        <Styled.Container>
            <Styled.Logo />
            <Styled.NavLinks>
                <Styled.NavLink>
                    Home
                </Styled.NavLink>
                <Styled.NavLink>
                    Favorites {favoritesPokemons.length ? ` [${favoritesPokemons.length}] ` : ''}
                </Styled.NavLink>
                <Styled.NavLink>
                    About
                </Styled.NavLink>
            </Styled.NavLinks>
        </Styled.Container>
    )
}

export default Navbar;