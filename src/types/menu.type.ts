export type MenuItem = {
    id: number;
    restaurant_id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
};

export type UpdateMenuItemPayload = {
    name: string;
    description: string;
    price: number;
    quantity: number;
};

export type CreateMenuItemPayload = {
    name: string;
    description: string;
    price: number;
    quantity: number;
};
