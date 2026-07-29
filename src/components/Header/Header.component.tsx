import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import { Button, Container, Drawer, Typography } from '@mui/material';

import Logo from '@assets/images/logo.png';
import { PopupMenu } from '@components';
import { navigationItems } from '@config/navigation';
import { APP_ROUTES } from '@constants';
import { logout } from '@features/auth';
import { useAppDispatch, useAppSelector } from '@hooks';

import {
    ActionContainer,
    DrawerContent,
    LogoContainer,
    LogoImage,
    LogoLink,
    MobileMenuButton,
    NavigationContainer,
    NavigationLink,
    ProfileAvatar,
    StyledAppBar,
    StyledToolbar,
} from './Header.styles';
import { getProfileMenuItems } from './profileMenuItems';

export const Header = () => {
    // States
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    // Hooks
    const dispatch = useAppDispatch();

    // Selectors
    const auth = useAppSelector((state) => state.auth);

    const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuItems = auth.user
        ? getProfileMenuItems({
              restaurants: auth.user.restaurants,
              onLogout: () => {
                  handleMenuClose();
                  dispatch(logout());
              },
          })
        : [];

    return (
        <StyledAppBar position="static" elevation={1}>
            <Container maxWidth="xl">
                <StyledToolbar>
                    <LogoLink to={APP_ROUTES.HOME}>
                        <LogoContainer direction="row" spacing={1}>
                            <LogoImage src={Logo} alt="EatPlex Logo" />

                            <Typography variant="h5" color="primary">
                                EatPlex
                            </Typography>
                        </LogoContainer>
                    </LogoLink>

                    <NavigationContainer direction="row" spacing={3}>
                        {navigationItems.map((item) => (
                            <NavigationLink key={item.path} to={item.path}>
                                {item.label}
                            </NavigationLink>
                        ))}
                    </NavigationContainer>

                    <ActionContainer direction="row" spacing={1}>
                        {!auth.isAuthenticated ? (
                            <>
                                <Button
                                    component={NavLink}
                                    to={APP_ROUTES.LOGIN}
                                    color="inherit"
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
                            <ProfileAvatar onClick={handleProfileClick}>
                                {auth.user?.name?.charAt(0).toUpperCase()}
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
                <DrawerContent spacing={1}>
                    {!auth.isAuthenticated ? (
                        <>
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
                    ) : (
                        <>
                            {menuItems.map((item) => (
                                <Button
                                    key={item.label}
                                    onClick={() => {
                                        item.onClick?.();

                                        setIsDrawerOpen(false);
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </>
                    )}
                </DrawerContent>
            </Drawer>

            {auth.isAuthenticated && (
                <PopupMenu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    items={menuItems}
                />
            )}
        </StyledAppBar>
    );
};
