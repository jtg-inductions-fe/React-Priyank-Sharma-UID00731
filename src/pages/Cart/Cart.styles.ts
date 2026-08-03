import { Alert, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPage = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6, 2),
    maxWidth: 800,
    marginInline: 'auto',

    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(3, 2),
    },
}));

export const CartHeader = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(3),
}));

export const CartItemRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing(2),
    paddingBlock: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,

    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: theme.spacing(1),
    },
}));

export const CartFooter = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(3),
    borderTop: `1px solid ${theme.palette.divider}`,
}));

export const StyledAlert = styled(Alert)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));
