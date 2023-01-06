import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as OriginalLogo } from "./Logo.svg";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.Charcoal};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  @media screen and (max-width: 740px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Logo = styled(OriginalLogo)`
  width: 10rem;
  height: auto;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 740px) {
    margin: 0.7rem 0;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.GoldenPoppy};
  text-decoration: none;

  @media screen and (max-width: 740px) {
    padding: 0.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  margin: 0 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus,
  &:active,
  &:active,
  &:visited,
  &:link {
    color: ${({ theme }) => theme.colors.GoldenPoppy};
  }

  &:hover {
    opacity: 0.7;
  }
`;
