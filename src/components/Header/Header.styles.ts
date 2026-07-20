import { NavLink } from 'react-router-dom';

import { AppBar, Avatar, Box, IconButton, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
}));

export const StyledToolbar = styled(Toolbar)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '7rem',
}));

export const LogoContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
}));

export const NavigationContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',

    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

export const ActionContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

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

export const DrawerContent = styled(Box)(() => ({
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
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
