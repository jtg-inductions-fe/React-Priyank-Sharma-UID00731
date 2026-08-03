import type { Theme } from '@mui/material/styles';
import type {
    TypographyOptions,
    TypographyUtils,
} from '@mui/material/styles/createTypography';

import { HTML_FONT_SIZE } from '@constants';

/**
 * Utility functions for typography.
 */
const typographyUtil: TypographyUtils = {
    /**
     * Converts a pixel value to rem units based on the base HTML font size.
     */
    pxToRem: (px: number) => `${px / HTML_FONT_SIZE}rem`,
};

/**
 * Defines the application's typography system, including responsive font sizes.
 * @param theme - Theme object to access breakpoint utilities.
 */
const typographyStyle = (theme: Theme): TypographyOptions => {
    const { breakpoints } = theme;

    return {
        fontFamily: "'Inter', sans-serif",
        htmlFontSize: HTML_FONT_SIZE,

        // Standard font weights
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,

        // Headings
        h1: {
            fontSize: typographyUtil.pxToRem(30),
            fontWeight: 700,
            lineHeight: typographyUtil.pxToRem(45),
            [breakpoints.up('md')]: {
                fontSize: typographyUtil.pxToRem(48),
                lineHeight: typographyUtil.pxToRem(62.5),
            },
        },
        h2: {
            fontSize: typographyUtil.pxToRem(26),
            fontWeight: 700,
            lineHeight: typographyUtil.pxToRem(36),
            [breakpoints.up('md')]: {
                fontSize: typographyUtil.pxToRem(40),
                lineHeight: typographyUtil.pxToRem(52),
            },
        },
        h3: {
            fontSize: typographyUtil.pxToRem(22),
            fontWeight: 700,
            lineHeight: typographyUtil.pxToRem(30),
            [breakpoints.up('md')]: {
                fontSize: typographyUtil.pxToRem(32),
                lineHeight: typographyUtil.pxToRem(42),
            },
        },
        h4: {
            fontSize: typographyUtil.pxToRem(20),
            fontWeight: 600,
            lineHeight: typographyUtil.pxToRem(28),
            [breakpoints.up('md')]: {
                fontSize: typographyUtil.pxToRem(24),
                lineHeight: typographyUtil.pxToRem(32),
            },
        },
        h5: {
            fontSize: typographyUtil.pxToRem(18),
            fontWeight: 600,
            lineHeight: typographyUtil.pxToRem(26),
            [breakpoints.up('md')]: {
                fontSize: typographyUtil.pxToRem(20),
                lineHeight: typographyUtil.pxToRem(28),
            },
        },
        h6: {
            fontSize: typographyUtil.pxToRem(16),
            fontWeight: 600,
            lineHeight: typographyUtil.pxToRem(24),
            [breakpoints.up('md')]: {
                fontSize: typographyUtil.pxToRem(18),
                lineHeight: typographyUtil.pxToRem(26),
            },
        },

        // Subtitles (Used for emphasis in lists or cards)
        subtitle1: {
            fontSize: typographyUtil.pxToRem(16),
            fontWeight: 500,
            lineHeight: typographyUtil.pxToRem(24),
        },
        subtitle2: {
            fontSize: typographyUtil.pxToRem(14),
            fontWeight: 500,
            lineHeight: typographyUtil.pxToRem(22),
        },

        // Body Text (Standard paragraph text)
        body1: {
            fontSize: typographyUtil.pxToRem(16),
            fontWeight: 400,
            lineHeight: typographyUtil.pxToRem(24),
        },
        body2: {
            fontSize: typographyUtil.pxToRem(14),
            fontWeight: 400,
            lineHeight: typographyUtil.pxToRem(22),
        },

        // UI Elements
        button: {
            fontSize: typographyUtil.pxToRem(14),
            fontWeight: 600,
            lineHeight: typographyUtil.pxToRem(24),
            textTransform: 'none',
        },
        caption: {
            fontSize: typographyUtil.pxToRem(12),
            fontWeight: 400,
            lineHeight: typographyUtil.pxToRem(18),
        },
        overline: {
            fontSize: typographyUtil.pxToRem(12),
            fontWeight: 600,
            lineHeight: typographyUtil.pxToRem(18),
            textTransform: 'uppercase',
        },
    };
};

export const typography = { typographyStyle, typographyUtil };
