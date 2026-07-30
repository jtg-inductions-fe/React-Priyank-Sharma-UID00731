import { baseApi } from '@api/baseApi';
import { authReducer } from '@features/auth';
import { cartReducer } from '@features/cart/cart.slice';
import { configureStore } from '@reduxjs/toolkit';

/**
 * Global Redux store.
 */
export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,

        [baseApi.reducerPath]: baseApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});
