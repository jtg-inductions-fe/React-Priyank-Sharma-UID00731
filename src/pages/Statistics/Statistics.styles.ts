import { Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPage = styled(Stack)(({ theme }) => ({
    width: '100%',
    maxWidth: 1200,
    margin: '0 auto',
    padding: theme.spacing(5, 4),

    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(4, 3),
    },

    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(3, 2),
    },
}));

export const HeaderSection = styled(Stack)(({ theme }) => ({
    marginBottom: theme.spacing(5),
}));

export const Section = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2],

    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
    },
}));
