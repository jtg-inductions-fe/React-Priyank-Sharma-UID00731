import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { LoginPayload } from '@types';

import { AuthState } from './types';

/**
 * Initial authentication state.
 */
const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
};

/**
 * Redux slice for authentication state management.
 */
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        /**
         * Stores authenticated user information after successful login.
         *
         * @param state - Current authentication state.
         * @param action - Login payload containing user and token.
         */
        loginSuccess(state, action: PayloadAction<LoginPayload>) {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            state.isAuthenticated = true;
        },
        /**
         * Clears the authenticated user information.
         *
         * @param state - Current authentication state.
         */
        logout(state) {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
