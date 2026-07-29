import { baseApi } from '@api/baseApi';
import { authReducer } from '@features/auth';
import { configureStore } from '@reduxjs/toolkit';

/**
 * Global Redux store.
 */
export const store = configureStore({
    reducer: {
        auth: authReducer,

        [baseApi.reducerPath]: baseApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});
