import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";

const theme = {
    bgColor: '#F6F8FF',
    colors: {
        Charcoal: '#333d50',
        GoldenPoppy: '#F9C205',
        GlossyGrape: '#9C89B8',
        GhostWhite: '#F6F8FF',
        Verdigris: '#3AAFB9'
    },
    fonts: ['sans-serif', 'Roboto'],
    fontSizes: {
        sm: '1rem',
        md: '2rem',
        lg: '3rem',
        xlg: '5rem',
        xsl: '0.5rem'
    }
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme} >
        {children}
        <GlobalStyles />
    </ThemeProvider>
);

export default Theme;