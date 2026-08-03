import { baseApi } from 'services';
import { cartReducer } from 'slices';
import { authReducer } from 'slices';

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
