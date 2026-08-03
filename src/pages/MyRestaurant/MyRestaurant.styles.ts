import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPage = styled(Stack)(({ theme }) => ({
    width: '100%',
    flex: 1,
    padding: theme.spacing(4, 2),

    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6, 4),
    },
}));

export const RestaurantsHeader = styled(Stack)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    textAlign: 'center',
    alignItems: 'center',
    gap: theme.spacing(1),
}));
