import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPage = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6, 2),
}));

export const RestaurantsHeader = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    marginBottom: theme.spacing(6),
}));
