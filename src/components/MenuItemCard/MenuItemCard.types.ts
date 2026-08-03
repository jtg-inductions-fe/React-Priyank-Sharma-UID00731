import type { MenuItem } from '@types';

export type MenuCardProps = {
    item: MenuItem;
    isRestaurantMenu: boolean;
    isOwner: boolean;
    restaurantId: number;
    cartQuantity?: number;
    onEdit?: (item: MenuItem) => void;
    onDelete: (item: MenuItem) => void;
    onAddToCart?: (item: MenuItem) => void;
    onIncrement?: (item: MenuItem) => void;
    onDecrement?: (item: MenuItem) => void;
};
