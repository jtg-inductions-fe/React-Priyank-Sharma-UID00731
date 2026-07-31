import type {
    LoginRequest,
    LoginResponse,
    RegisterRequest,
    User,
} from '@types';

import { baseApi } from './base.service';

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: 'auth/login/',
                method: 'POST',
                body: credentials,
            }),
        }),
        register: builder.mutation<User, RegisterRequest>({
            query: (userData) => ({
                url: 'user/',
                method: 'POST',
                body: userData,
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
