import { baseApi } from 'services/base.service';
import { authReducer } from 'slices/auth';

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
