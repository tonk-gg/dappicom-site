import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    @font-face {
        font-family: 'Rubik Mono One';
        font-weight: normal;
        font-style: normal;
        src: url('fonts/rubik/RubikMonoOne-Regular.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Alro';
        font-weight: normal;
        font-style: normal;
        src: url('fonts/alro/alro-alro-regular-400.ttf') format('truetype');
    }
    
    @font-face {
        font-family: 'VisbyCF';
        font-weight: 700;
        font-style: normal;
        src: url('fonts/visby/visbycf-bold-webfont.ttf') format('truetype');
    }
    @font-face {
        font-family: 'VisbyCF';
        font-weight: 800;
        font-style: normal;
        src: url('fonts/visby/visbycf-extrabold-webfont.ttf') format('truetype');
    }
    @font-face {
        font-family: 'Inter';
        font-weight: normal;
        font-style: normal;
        src: url('fonts/inter/Inter-Regular.ttf') format('truetype');
    }
`;

export default GlobalStyle;