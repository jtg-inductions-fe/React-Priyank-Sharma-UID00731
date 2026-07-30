import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { CartState, MenuItem } from '@types';
import { getCart, removeCart, setCart } from '@utils';

const initialState: CartState = getCart() ?? {
    restaurantId: null,
    items: [],
};

/**
 * Redux slice for cart state management.
 *
 * A cart may only contain items belonging to a single restaurant;
 * conflicting adds must be blocked by the caller before dispatching.
 * State is persisted to localStorage so it survives page refreshes.
 */
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<MenuItem>) {
            const menuItem = action.payload;

            if (state.items.length === 0) {
                state.restaurantId = menuItem.restaurant_id;
            }

            const existingItem = state.items.find(
                (cartItem) => cartItem.menu_item.id === menuItem.id,
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ menu_item: menuItem, quantity: 1 });
            }

            setCart(state);
        },

        incrementItem(state, action: PayloadAction<number>) {
            const item = state.items.find(
                (cartItem) => cartItem.menu_item.id === action.payload,
            );

            if (item) {
                item.quantity += 1;
                setCart(state);
            }
        },

        decrementItem(state, action: PayloadAction<number>) {
            const item = state.items.find(
                (cartItem) => cartItem.menu_item.id === action.payload,
            );

            if (!item) {
                return;
            }

            if (item.quantity <= 1) {
                state.items = state.items.filter(
                    (cartItem) => cartItem.menu_item.id !== action.payload,
                );

                if (state.items.length === 0) {
                    state.restaurantId = null;
                }
            } else {
                item.quantity -= 1;
            }

            setCart(state);
        },

        removeItem(state, action: PayloadAction<number>) {
            state.items = state.items.filter(
                (cartItem) => cartItem.menu_item.id !== action.payload,
            );

            if (state.items.length === 0) {
                state.restaurantId = null;
            }

            setCart(state);
        },

        clearCart(state) {
            state.restaurantId = null;
            state.items = [];

            removeCart();
        },
    },
});

export const { addItem, incrementItem, decrementItem, removeItem, clearCart } =
    cartSlice.actions;

export const cartReducer = cartSlice.reducer;
