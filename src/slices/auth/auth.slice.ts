import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { LoginResponse } from '@types';
import {
    getToken,
    getUser,
    removeToken,
    removeUser,
    setToken,
    setUser,
} from '@utils';

import type { AuthState } from './auth.types';

/**
 * Initial authentication state.
 */
const initialState: AuthState = {
    user: getUser(),
    token: getToken(),
    isAuthenticated: Boolean(getToken()),
};

/**
 * Redux slice for authentication state management.
 */
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        /**
         * Stores authenticated user information after successful login
         * and persists authentication data in browser cookies.
         *
         * @param state - Current authentication state.
         * @param action - Login payload containing user and token.
         */
        loginSuccess(state, action: PayloadAction<LoginResponse>) {
            const { user, token } = action.payload;

            state.user = user;
            state.token = token;
            state.isAuthenticated = true;

            setToken(token);
            setUser(user);
        },

        /**
         * Clears the authenticated user information
         * and removes persisted authentication data.
         *
         * @param state - Current authentication state.
         */
        logout(state) {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;

            removeToken();
            removeUser();
        },
    },
});

/**
 * Authentication actions.
 */
export const { loginSuccess, logout } = authSlice.actions;

/**
 * Authentication reducer.
 */
export const authReducer = authSlice.reducer;
