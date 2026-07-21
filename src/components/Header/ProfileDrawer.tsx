import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Divider, Drawer, ListItemIcon, ListItemText } from '@mui/material';

import { StyledList, StyledListItemButton } from './ProfileDrawer.styles';
import { logout } from '../../features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { RoleType } from '../../types/auth';

interface ProfileDrawerProps {
    open: boolean;
    onClose: () => void;
}

const ProfileDrawer = ({ open, onClose }: ProfileDrawerProps) => {
    const dispatch = useAppDispatch();

    const auth = useAppSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        onClose();
    };

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <StyledList>
                {auth.user?.role === RoleType.NORMAL_USER ? (
                    <>
                        <StyledListItemButton>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>

                            <ListItemText primary="Profile" />
                        </StyledListItemButton>

                        <StyledListItemButton>
                            <ListItemIcon>
                                <ShoppingCartIcon />
                            </ListItemIcon>

                            <ListItemText primary="Cart" />
                        </StyledListItemButton>

                        <StyledListItemButton>
                            <ListItemIcon>
                                <ReceiptLongIcon />
                            </ListItemIcon>

                            <ListItemText primary="Orders" />
                        </StyledListItemButton>
                    </>
                ) : (
                    <>
                        <StyledListItemButton>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>

                            <ListItemText primary="Profile" />
                        </StyledListItemButton>

                        <StyledListItemButton>
                            <ListItemIcon>
                                <StorefrontIcon />
                            </ListItemIcon>

                            <ListItemText primary="My Restaurants" />
                        </StyledListItemButton>
                        <StyledListItemButton>
                            <ListItemIcon>
                                <RestaurantMenuIcon />
                            </ListItemIcon>

                            <ListItemText primary="Menu Management" />
                        </StyledListItemButton>

                        <StyledListItemButton>
                            <ListItemIcon>
                                <BarChartIcon />
                            </ListItemIcon>

                            <ListItemText primary="Statistics" />
                        </StyledListItemButton>
                    </>
                )}

                <Divider />

                <StyledListItemButton onClick={handleLogout}>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>

                    <ListItemText primary="Logout" />
                </StyledListItemButton>
            </StyledList>
        </Drawer>
    );
};
export default ProfileDrawer;
