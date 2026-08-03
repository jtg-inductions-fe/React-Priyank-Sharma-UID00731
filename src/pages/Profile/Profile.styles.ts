import { Avatar, Button, Card, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageContainer = styled(Stack)(({ theme }) => ({
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(4, 2),

    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6, 4),
    },
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
}));

export const ProfileCard = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 750,
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
}));

export const UserInfo = styled(Stack)(({ theme }) => ({
    alignItems: 'center',
    gap: theme.spacing(1),
}));

export const ProfileAvatar = styled(Avatar)(({ theme }) => ({
    width: 100,
    height: 100,
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.fontWeightBold,
}));

export const Divider = styled('hr')(({ theme }) => ({
    border: 0,
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: theme.spacing(3, 0),
}));

export const DetailsContainer = styled(Stack)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(3, 6),
    justifyItems: 'center',

    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
    },
}));

export const DetailRow = styled(Stack)(({ theme }) => ({
    width: '100%',
    maxWidth: 220,
    alignItems: 'center',
    gap: theme.spacing(0.5),
}));

export const DetailLabel = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
}));

export const DetailValue = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textAlign: 'center',
}));

export const ActionContainer = styled(Stack)(({ theme }) => ({
    marginTop: theme.spacing(4),
    gap: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        width: '100%',
    },
}));

export const ActionButton = styled(Button)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        minWidth: 180,
    },

    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}));
