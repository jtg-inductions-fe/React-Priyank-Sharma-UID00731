import { NavLink } from 'react-router-dom';

import { AppBar, Avatar, IconButton, Stack, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
}));

export const StyledToolbar = styled(Toolbar)({
    justifyContent: 'space-between',
    minHeight: '7rem',
});

export const LogoContainer = styled(Stack)(() => ({
    alignItems: 'center',
}));

export const NavigationContainer = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

export const ActionContainer = styled(Stack)(({ theme }) => ({
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

export const NavigationLink = styled(NavLink)(({ theme }) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.2s ease',

    '&:hover': {
        color: theme.palette.primary.main,
    },

    '&.active': {
        color: theme.palette.primary.main,
        fontWeight: 600,
    },
}));

export const MobileMenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',

    [theme.breakpoints.down('md')]: {
        display: 'flex',
    },
}));

export const DrawerContent = styled(Stack)(() => ({
    width: '250px',
    padding: '1rem',
}));

export const ProfileAvatar = styled(Avatar)(({ theme }) => ({
    cursor: 'pointer',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: 600,
}));

export const LogoImage = styled('img')({
    width: 40,
    height: 40,
    objectFit: 'contain',
});
