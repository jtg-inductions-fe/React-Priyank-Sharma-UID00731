import type { User } from '@types';

import { baseApi } from './base.service';

export const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getUser: build.query<User, number>({
            query: (userId) => `/user/${userId}`,
        }),
    }),
});

export const { useGetUserQuery, useLazyGetUserQuery } = userApi;
