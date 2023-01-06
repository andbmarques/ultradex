import styled from "styled-components";

export const Container = styled.div`
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Message = styled.p`
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const Image = styled.img`
    width: 14rem;
    margin: 1rem 0;
`;