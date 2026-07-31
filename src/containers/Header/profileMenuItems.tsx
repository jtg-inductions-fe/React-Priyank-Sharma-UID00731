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
import { APP_ROUTES } from '@constants';

import { GetProfileMenuItemsProps } from './profileMenuItems.types';

export const getProfileMenuItems = ({
    restaurants = [],
    onLogout,
    onNavigate,
}: GetProfileMenuItemsProps): PopupMenuItem[] => {
    const isRestaurantOwner = restaurants.length > 0;

    const menuItems: PopupMenuItem[] = [
        {
            label: 'Profile',
            icon: <Person />,
            onClick: () => {
                onNavigate(APP_ROUTES.PROFILE);
            },
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
                onClick: () => {
                    onNavigate(APP_ROUTES.MY_RESTAURANTS);
                },
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
