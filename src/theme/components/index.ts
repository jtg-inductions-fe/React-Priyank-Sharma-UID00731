import type { Components } from '@mui/material/styles';

import InterBold from '@assets/fonts/inter/Inter-Bold.woff2';
import InterLight from '@assets/fonts/inter/Inter-Light.woff2';
import InterMedium from '@assets/fonts/inter/Inter-Medium.woff2';
import InterRegular from '@assets/fonts/inter/Inter-Regular.woff2';
import InterSemiBold from '@assets/fonts/inter/Inter-SemiBold.woff2';

const fontFaceDeclarations = `
@font-face {
    font-display: swap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    src: url(${InterLight}) format('woff2');
}

@font-face {
    font-display: swap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: url(${InterRegular}) format('woff2');
}

@font-face {
    font-display: swap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    src: url(${InterMedium}) format('woff2');
}

@font-face {
    font-display: swap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    src: url(${InterSemiBold}) format('woff2');
}

@font-face {
    font-display: swap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    src: url(${InterBold}) format('woff2');
};
`;

export const components: Components = {
    MuiCssBaseline: {
        styleOverrides: () => `
            html {
                font-size: 62.5%;
            }

            ${fontFaceDeclarations}
        `,
    },
};
