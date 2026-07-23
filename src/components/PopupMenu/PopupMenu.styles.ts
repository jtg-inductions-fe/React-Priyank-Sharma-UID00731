import { Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledMenu = styled(Menu)(() => ({}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    minWidth: 240,
    padding: theme.spacing(1.5, 2),
}));
