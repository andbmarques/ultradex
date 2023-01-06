import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.fonts[1]};
    }

    body {
        background: ${({ theme }) => theme.bgColor};
    }

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.Charcoal};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.GoldenPoppy};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.bgColor};
    }

`;
