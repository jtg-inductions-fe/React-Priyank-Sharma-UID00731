import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPage = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6, 2),
}));

export const MenuHeader = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));
