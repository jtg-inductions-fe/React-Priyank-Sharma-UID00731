import {
    BarChart,
    Logout,
    Person,
    ReceiptLong,
    RestaurantMenu,
    ShoppingCart,
    Storefront,
} from '@mui/icons-material';

import { PopupMenuItem } from '@components/PopupMenu';
import { ROLE, RoleType } from '@types';

interface GetProfileMenuItemsProps {
    role?: RoleType;
    onLogout: () => void;
}

export const getProfileMenuItems = ({
    role,
    onLogout,
}: GetProfileMenuItemsProps): PopupMenuItem[] => {
    const menuItems: PopupMenuItem[] = [
        {
            label: 'Profile',
            icon: <Person />,
        },
    ];

    if (role === ROLE.NORMAL_USER) {
        menuItems.push(
            {
                label: 'Cart',
                icon: <ShoppingCart />,
            },
            {
                label: 'Orders',
                icon: <ReceiptLong />,
            },
        );
    }

    if (role === ROLE.ADMIN) {
        menuItems.push(
            {
                label: 'My Restaurants',
                icon: <Storefront />,
            },
            {
                label: 'Menu Management',
                icon: <RestaurantMenu />,
            },
            {
                label: 'Statistics',
                icon: <BarChart />,
            },
        );
    }

    menuItems.push({
        label: 'Logout',
        icon: <Logout />,
        onClick: onLogout,
    });

    return menuItems;
};
