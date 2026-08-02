import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPage = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '70vh',
    padding: theme.spacing(4),
}));

export const ErrorCode = styled('div')(({ theme }) => ({
    fontSize: theme.typography.pxToRem(120),
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    lineHeight: 1,

    [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.pxToRem(80),
    },
}));

export const ButtonGroup = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
    marginTop: theme.spacing(3),

    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        width: '100%',
        maxWidth: 280,
    },
}));
