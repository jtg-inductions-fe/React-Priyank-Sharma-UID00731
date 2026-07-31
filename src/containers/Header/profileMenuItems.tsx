import {
    BarChart,
    Logout,
    Person,
    ReceiptLong,
    RestaurantMenu,
    ShoppingCart,
    Storefront,
} from '@mui/icons-material';

import { PopupMenuItem } from '@components';

import { GetProfileMenuItemsProps } from './profileMenuItems.types';

export const getProfileMenuItems = ({
    restaurants = [],
    onLogout,
}: GetProfileMenuItemsProps): PopupMenuItem[] => {
    const isRestaurantOwner = restaurants.length > 0;

    const menuItems: PopupMenuItem[] = [
        {
            label: 'Profile',
            icon: <Person />,
        },
    ];

    if (!isRestaurantOwner) {
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

    if (isRestaurantOwner) {
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
