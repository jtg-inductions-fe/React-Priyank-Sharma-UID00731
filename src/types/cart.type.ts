import type { MenuItem } from './menu.type';

export type CartItem = {
    menu_item: MenuItem;
    quantity: number;
};

export type CartState = {
    restaurantId: number | null;
    items: CartItem[];
};

export type OrderCreateItemPayload = {
    menu_item_id: number;
    quantity: number;
};

export type OrderCreatePayload = {
    restaurant_id: number;
    items: OrderCreateItemPayload[];
};
