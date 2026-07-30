import { Alert, Box, Divider, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPage = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6, 2),
    maxWidth: 800,
    marginInline: 'auto',

    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(3, 2),
    },
}));

export const OrdersHeader = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(4),
}));

export const OrderCard = styled(Paper)(({ theme }) => ({
    borderRadius: theme.spacing(2),
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    transition: 'box-shadow 0.2s ease',

    '&:hover': {
        boxShadow: theme.shadows[4],
    },

    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
    },
}));

export const OrderCardHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(1.5),

    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: theme.spacing(0.5),
    },
}));

export const OrderIdBadge = styled('span')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: theme.typography.pxToRem(13),
    padding: theme.spacing(0.5, 1.5),
    borderRadius: theme.spacing(3),
}));

export const StyledSuccessAlert = styled(Alert)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(1.5),
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
    marginBlock: theme.spacing(1.5),
}));

export const ItemRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    paddingBlock: theme.spacing(0.5),
}));

export const TotalRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(2),
}));

export const EmptyState = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing(8, 2),
    color: theme.palette.text.secondary,
}));
