import { ArrowArcLeft } from "phosphor-react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { sprites } from "./spriteHandler";

export const Container = styled.div`
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding: 1rem;
`;

export const BackButtonIcon = styled(ArrowArcLeft)``;

export const BackButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2``;

export const Main = styled.div`
  margin-top: 1.5rem;
`;

export const MainHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 740px) {
    flex-direction: column-reverse;
  }
`;

export const ImageContainer = styled.div`
  width: 21rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 1rem;
  flex-direction: column;
  align-self: center;

  @media screen and (max-width: 740px) {
    width: 21rem;
    height: 50vh;
    margin-top: -6rem;
  }
`;

export const Image = styled.img`
  width: 20rem;
  margin-top: 0rem;
  position: relative;
  top: -0.5rem;
  height: auto;
  filter: drop-shadow(5px 5px 20px rgba(0, 0, 0, 0.3));

  @media screen and (max-width: 740px) {
    width: 13rem;
    top: 2.5rem;
  }
`;

export const ImageBackground = styled.div`
  background-image: url(${sprites.grass});
  width: 17rem;
  height: 5rem;
  border-radius: 50%;
  opacity: 0.7;
  position: absolute;
  bottom: 1rem;
  z-index: -1;
  filter: drop-shadow(5px 5px 7px #000);

  @media screen and (max-width: 740px) {
    width: 15rem;
  }
`;

export const MainInfosContainer = styled.div`
  width: 75%;
  padding: 1rem;
  height: fit-content;
  background-color: #f0f0f0;
  border-radius: 0.5rem;
  margin: 1rem;
  margin-right: 2rem;

  @media screen and (max-width: 740px) {
    width: 100%;
    margin: 1rem 0;
  }
`;

export const MainInfosText = styled.p`
  margin: 1rem 0;
  font-size: 18px;

  ${({ bordered, theme }) =>
    bordered
      ? css`
          border-left: 3px solid ${theme.colors.Charcoal};
          padding: 0.5rem 0;
          padding-left: 0.5rem;
          background-color: #ffffff;
          margin-top: 0.5rem;
        `
      : css``};

  ${({ label, theme }) =>
    label
      ? css`
          font-weight: bold;
          color: ${theme.colors.Charcoal};
          margin-right: 0.5rem;
        `
      : css``};
`;

export const SpanCollection = styled.div`
  display: flex;
  margin: 2rem 0;

  @media screen and (max-width: 740px) {
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const Span = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  background-color: ${({ theme }) => theme.colors.GoldenPoppy};
  border-radius: 0.4rem;
  padding: 2rem 1rem;

  @media screen and (max-width: 740px) {
    margin: 0.5rem 0;
  }
`;

export const SpanLabel = styled.p`
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SpanValue = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  //padding: 1.5rem 1rem;
  font-weight: bold;
`;

export const OtherInfosContainer = styled.div`
  padding: 2rem;
`;

export const Footer = styled.div``;

export const Types = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
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
