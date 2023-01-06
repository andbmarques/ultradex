import { ArrowRight, ArrowLeft } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
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
`;
