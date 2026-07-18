import { configureStore } from '@reduxjs/toolkit';

/**
 * Global Redux Store configuration.
 */
export const store = configureStore({
    reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
