export type MenuStat = {
    menu_item_name: string;
    order_count: number;
};

export type TopCustomer = {
    customer_name: string;
    email: string;
    order_count: number;
};

export type OrderItem = {
    id: number;
    quantity: number;
    menu_item: {
        id: number;
        name: string;
        price: number;
    };
};

export type Order = {
    id: number;
    user_id: number;
    restaurant_id: number;
    total_amount: number;
    created_at: string;
    order_items: OrderItem[];
};
