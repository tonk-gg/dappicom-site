import { createGlobalStyle } from "styled-components";
const isDev = import.meta.env.VITE_IS_DEV === 'true'; // Environment variables are always strings.

let GlobalStyle;

if (isDev) {
GlobalStyle = createGlobalStyle `
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
} else {
GlobalStyle = createGlobalStyle `
    @font-face {
        font-family: 'Rubik Mono One';
        font-weight: normal;
        font-style: normal;
        src: url('/dappicom-site/fonts/rubik/RubikMonoOne-Regular.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Alro';
        font-weight: normal;
        font-style: normal;
        src: url('/dappicom-site/fonts/alro/alro-alro-regular-400.ttf') format('truetype');
    }
    
    @font-face {
        font-family: 'VisbyCF';
        font-weight: 700;
        font-style: normal;
        src: url('/dappicom-site/fonts/visby/visbycf-bold-webfont.ttf') format('truetype');
    }
    @font-face {
        font-family: 'VisbyCF';
        font-weight: 800;
        font-style: normal;
        src: url('/dappicom-site/fonts/visby/visbycf-extrabold-webfont.ttf') format('truetype');
    }
    @font-face {
        font-family: 'Inter';
        font-weight: normal;
        font-style: normal;
        src: url('/dappicom-site/fonts/inter/Inter-Regular.ttf') format('truetype');
    }
`;
}

export default GlobalStyle;