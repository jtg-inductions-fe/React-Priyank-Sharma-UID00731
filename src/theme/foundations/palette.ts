import { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constants';

/**
 * Custom palette mapping for the application's theme.
 * Connects design tokens (constants) to Material-UI's theme engine.
 */
export const palette: PaletteOptions = {
    primary: {
        main: COLORS.PRIMARY.MAIN,
        light: COLORS.PRIMARY.LIGHT,
    },
    secondary: {
        main: COLORS.SECONDARY.MAIN,
    },
    background: {
        default: COLORS.BACKGROUND.DEFAULT,
        paper: COLORS.BACKGROUND.PAPER,
    },
    text: {
        primary: COLORS.TEXT.PRIMARY,
        secondary: COLORS.TEXT.SECONDARY,
        disabled: COLORS.TEXT.DISABLED,
    },
};
