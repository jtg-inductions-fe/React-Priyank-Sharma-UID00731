export interface MenuItem {
    id: number;
    restaurant_id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
}

export interface UpdateMenuItemPayload {
    name: string;
    description: string;
    price: number;
    quantity: number;
}

export interface CreateMenuItemPayload {
    name: string;
    description: string;
    price: number;
    quantity: number;
}
