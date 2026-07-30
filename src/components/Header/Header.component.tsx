import { useState } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {
    Badge,
    Button,
    Container,
    Drawer,
    IconButton,
    Typography,
} from '@mui/material';

import Logo from '@assets/images/logo.png';
import { PopupMenu } from '@components';
import { navigationItems } from '@config/navigation';
import { APP_ROUTES } from '@constants';
import { clearCart } from '@features';
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
    const navigate = useNavigate();

    // Selectors
    const auth = useAppSelector((state) => state.auth);

    const cartCount = useAppSelector((state) =>
        state.cart.items.reduce((sum, cartItem) => sum + cartItem.quantity, 0),
    );

    const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuItems = auth.user
        ? getProfileMenuItems({
              restaurants: auth.user.restaurants,
              onNavigate: (path) => {
                  void navigate(path);
              },
              onLogout: () => {
                  handleMenuClose();
                  dispatch(clearCart());
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
                        <IconButton
                            component={NavLink}
                            to={APP_ROUTES.CART}
                            color="inherit"
                        >
                            <Badge badgeContent={cartCount} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </IconButton>

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
                            <IconButton
                                onClick={handleProfileClick}
                                disableRipple
                            >
                                <ProfileAvatar>
                                    {auth.user?.name?.charAt(0).toUpperCase()}
                                </ProfileAvatar>
                            </IconButton>
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
                    <IconButton
                        component={NavLink}
                        to={APP_ROUTES.CART}
                        color="inherit"
                        onClick={() => setIsDrawerOpen(false)}
                    ></IconButton>

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

                    {!auth.isAuthenticated ? (
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
