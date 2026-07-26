import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6, 0),
}));

export const StyledContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
});

export const CardGrid = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: theme.spacing(3),
    marginTop: theme.spacing(4),

    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },

    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(3, 1fr)',
    },
}));
