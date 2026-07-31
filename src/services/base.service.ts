import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from '@utils';

/**
 * Base API configuration for RTK Query.
 *
 * Handles common API settings and automatically
 * attaches JWT token to authenticated requests.
 */
export const baseApi = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,

        /**
         * Adds authentication token to request headers.
         *
         * @param headers - Request headers.
         * @returns Updated headers with authorization token.
         */
        prepareHeaders: (headers) => {
            const token = getToken();

            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            return headers;
        },
    }),
    tagTypes: ['MenuItems', 'User', 'Orders'],
    endpoints: () => ({}),
});
