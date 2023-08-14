import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    @font-face {
        font-family: 'Rubik Mono One';
        font-weight: normal;
        font-style: normal;
        src: url('/fonts/rubik/RubikMonoOne-Regular.ttf') format('truetype');
        font-display: fallback;
    }
`;

export default GlobalStyle;