import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import { Button, Container, Drawer, Typography } from '@mui/material';

import { APP_ROUTES } from '@constants';
import { useAppDispatch, useAppSelector } from '@hooks';
import { RoleType } from '@types';

import {
    ActionContainer,
    DrawerContent,
    LogoContainer,
    LogoImage,
    MobileMenuButton,
    NavigationContainer,
    NavigationLink,
    ProfileAvatar,
    StyledAppBar,
    StyledToolbar,
} from './Header.styles';
import ProfileDrawer from './ProfileDrawer.component';
import Logo from '../../assets/images/logo.png';
import { loginSuccess } from '../../features/auth/authSlice';

const navigationItems = [
    {
        label: 'Restaurants',
        path: APP_ROUTES.RESTAURANTS,
    },
    {
        label: 'Menu',
        path: APP_ROUTES.MENU,
    },
];

const normalUser = {
    user: {
        id: 1,
        email: 'priyank@example.com',
        name: 'Priyank',
        city: '',
        state: '',
        zipcode: '',
        balance: 0,
        role: RoleType.NORMAL_USER,
    },
    token: 'dummy-token',
};

// const ownerUser = {
//     user: {
//         id: 2,
//         email: 'owner@example.com',
//         name: 'Restaurant Owner',
//         city: '',
//         state: '',
//         zipcode: '',
//         balance: 0,
//         role: RoleType.ADMIN,
//     },
//     token: 'dummy-token',
// };

export const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);

    const dispatch = useAppDispatch();

    const auth = useAppSelector((state) => state.auth);

    return (
        <StyledAppBar position="static" elevation={1}>
            <Container maxWidth="xl">
                <StyledToolbar>
                    <LogoContainer>
                        <LogoImage src={Logo} alt="EatPlex Logo" />

                        <Typography variant="h5" color="primary">
                            EatPlex
                        </Typography>
                    </LogoContainer>

                    <NavigationContainer>
                        {navigationItems.map((item) => (
                            <NavigationLink key={item.path} to={item.path}>
                                {item.label}
                            </NavigationLink>
                        ))}
                    </NavigationContainer>

                    <ActionContainer>
                        {!auth.isAuthenticated ? (
                            <>
                                <Button
                                    color="inherit"
                                    onClick={() =>
                                        dispatch(loginSuccess(normalUser))
                                    }
                                >
                                    Login
                                </Button>

                                <Button
                                    component={NavLink}
                                    to={APP_ROUTES.REGISTER}
                                    variant="contained"
                                >
                                    Register
                                </Button>
                            </>
                        ) : (
                            // How is the content in between is getting rendered
                            <ProfileAvatar
                                onClick={() => setIsProfileDrawerOpen(true)}
                            >
                                {auth.user?.name?.charAt(0)}
                            </ProfileAvatar>
                        )}
                    </ActionContainer>

                    <MobileMenuButton
                        color="inherit"
                        onClick={() => setIsDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </MobileMenuButton>
                </StyledToolbar>
            </Container>

            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            >
                <DrawerContent>
                    {auth.isAuthenticated && <Button>Profile</Button>}

                    {navigationItems.map((item) => (
                        <Button
                            key={item.path}
                            component={NavLink}
                            to={item.path}
                            onClick={() => setIsDrawerOpen(false)}
                        >
                            {item.label}
                        </Button>
                    ))}

                    {!auth.isAuthenticated && (
                        <>
                            <Button
                                component={NavLink}
                                to={APP_ROUTES.LOGIN}
                                onClick={() => setIsDrawerOpen(false)}
                            >
                                Login
                            </Button>

                            <Button
                                component={NavLink}
                                to={APP_ROUTES.REGISTER}
                                onClick={() => setIsDrawerOpen(false)}
                            >
                                Register
                            </Button>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
            <ProfileDrawer
                open={isProfileDrawerOpen}
                onClose={() => setIsProfileDrawerOpen(false)}
            />
        </StyledAppBar>
    );
};
