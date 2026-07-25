import { store } from './store';

/**
 * Root Redux state.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Redux dispatch type.
 */
export type AppDispatch = typeof store.dispatch;
