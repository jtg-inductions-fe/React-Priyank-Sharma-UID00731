import type { MenuItem } from '@types';

export interface MenuCardProps {
    item: MenuItem;
    isRestaurantMenu: boolean;
    isOwner: boolean;
    restaurantId: number;
    onEdit?: (item: MenuItem) => void;
    onDelete: (item: MenuItem) => void;
}
