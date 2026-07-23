import { authReducer } from '@features/auth';
import { configureStore } from '@reduxjs/toolkit';

/**
 * Global Redux store.
 */
export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});
