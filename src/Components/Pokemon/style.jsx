import { Heart } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.div`
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  width: 12.5rem;
  height: 12.5rem;
  margin: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.7rem;
  background: rgb(51, 61, 80);
  box-shadow: 4px 4px 1px 1px rgba(0, 0, 0, 0.05);
  background: linear-gradient(
    90deg,
    rgba(51, 61, 80, 1) 40%,
    ${({ type }) => {
      if (type === "grass") return "#09da30 170%";
      else if (type === "fire") return "#ff5100 170%";
      else if (type === "water") return "#2282ef 170%";
      else if (type === "electric") return "#faff00 170%";
      else if (type === "bug") return "#088f20 170%";
      else if (type === "normal") return "#efe9ba 170%";
      else if (type === "poison") return "#86088f 170%";
      else if (type === "rock") return "#4a2014 170%";
      else if (type === "ground") return "#d38014 170%";
      else if (type === "fairy") return "#fb9af5 170%";
      else if (type === "flying") return "#8fbbd6 170%";
      else if (type === "fighting") return "#c6322d 170%";
      else if (type === "psychic") return "#5f1445 170%";
      else if (type === "steel") return "#909090 170%";
      else if (type === "ice") return "#62d3f8 170%";
      else if (type === "ghost") return "#350839 170%";
      else if (type === "dragon") return "#d043dd 170%";
      else if (type === "dark") return "#221923 170%";
    }}
  );
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 740px) {
    width: 100%;
    margin: 1rem 0;
  }
`;

export const InfosContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 99;
  position: absolute;

  @media screen and (max-width: 740px) {
    width: 50%;
    position: absolute;
    left: 0;
  }
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.GhostWhite};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  @media screen and (max-width: 740px) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const Types = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 0.7rem;

  @media screen and (max-width: 740px) {
    flex-direction: row;
  }
`;

export const Type = styled.p`
  font-size: 0.75rem;
  margin-right: 0.5rem;
  margin-bottom: 0.2rem;
  color: ${({ type }) => {
    if (type === "grass") return "#a1ffb3";
    else if (type === "electric") return "#000000";
    else return "#ffffff";
  }};
  padding: 0.3rem;
  border-radius: 0.4rem;
  background-color: ${({ type }) => {
    if (type === "grass") return "#162419";
    else if (type === "fire") return "#ff5100";
    else if (type === "water") return "#2282ef";
    else if (type === "electric") return "#faff00";
    else if (type === "bug") return "#088f20";
    else if (type === "normal") return "#d2c460";
    else if (type === "poison") return "#86088f";
    else if (type === "rock") return "#4a2014";
    else if (type === "ground") return "#d38014";
    else if (type === "fairy") return "#fb9af5";
    else if (type === "flying") return "#8fbbd6";
    else if (type === "fighting") return "#c6322d";
    else if (type === "psychic") return "#5f1445";
    else if (type === "steel") return "#909090";
    else if (type === "ice") return "#62d3f8";
    else if (type === "ghost") return "#350839";
    else if (type === "dragon") return "#d043dd";
    else if (type === "dark") return "#221923";
  }};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 1rem;
`;

export const Id = styled.div`
  background-color: ${({ theme }) => theme.colors.GoldenPoppy};
  display: flex;
  padding: 0.2rem 0.5rem;
  justify-self: flex-end;
  align-items: center;
  border-radius: 0.3rem;

  @media screen and (max-width: 740px) {
    padding: 0.4rem 0.7rem;
  }
`;

export const SaveIcon = styled(Heart)`
  width: auto;
  height: auto;
`;

export const SavedIcon = styled(() => <Heart weight="fill" color="red" />)`
  width: auto;
  height: auto;
`;

export const SaveBtn = styled.div`
  background-color: ${({ theme }) => theme.colors.GhostWhite};
  display: flex;
  border-radius: 0.3rem;
  justify-self: flex-end;
  margin: 0 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 740px) {
    padding: 0.5rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  z-index: 98;
  opacity: 0.7;

  @media screen and (max-width: 740px) {
    width: 100%;
    align-items: flex-start;
    justify-content: flex-end;
    opacity: 0.95;
    position: absolute;
  }
`;

export const Image = styled.img`
  width: 11rem;
  height: 11rem;

  @media screen and (max-width: 740px) {
    width: 12rem;
    height: 12rem;
  }
`;
