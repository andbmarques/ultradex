import { MenuButton } from "@szhsin/react-menu";
import { ArrowRight, ArrowLeft } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 740px) {
    flex-direction: column;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChangeLimitContainer = styled.div`
  margin: 0 1.5rem;
  
  @media screen and (max-width: 740px) {
    display: none;
    margin: 0;
  }
`;

export const BackButton = styled(ArrowLeft)`
  cursor: pointer;
  margin: 0 0.4rem;
`;

export const NextButton = styled(ArrowRight)`
  cursor: pointer;
  margin: 0 0.4rem;
`;

export const PagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  @media screen and (max-width: 740px) {
    font-size: 14px;
  }
`;

export const MenuBtn = styled(MenuButton)`
  border: none;
  padding: 0.5rem 1rem;
  background-color: transparent;
  border-radius: 0.4rem;
  cursor: pointer;  
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;