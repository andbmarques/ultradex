import styled from "styled-components";
import { MagnifyingGlass } from "phosphor-react";

export const Container = styled.div`
  background-color: rgba(51, 61, 80, 0.9);
  display: ${({ location }) => location.pathname !== '/' ? 'none' : 'flex'};
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  

  @media screen and (max-width: 740px) {
    padding: 1.5rem 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  border: 0;
  border-radius: 0.3rem;
  outline: none;
  font-size: ${({ theme }) => theme.fontSizes.xms};
  padding: 0.5rem 1rem;
  opacity: 0.7;

  &:active,
  &:focus {
    opacity: 1;
  }

  @media screen and (max-width: 740px) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const Button = styled(MagnifyingGlass)`
  font-size: ${({ theme }) => theme.fontSizes.md};
  padding: 0.3rem;
  margin: 0 0.4rem;
  background-color: ${({ theme }) => theme.colors.GoldenPoppy};
  color: ${({ theme }) => theme.colors.Charcoal};
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;
