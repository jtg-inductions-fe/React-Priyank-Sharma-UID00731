import type { UpdateUserRequest, User } from '@types';

import { baseApi } from './base.service';

export const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getUser: build.query<User, number>({
            query: (userId) => `/user/${userId}`,
            providesTags: ['User'],
        }),
        updateUser: build.mutation<
            User,
            {
                userId: number;
                body: UpdateUserRequest;
            }
        >({
            query: ({ userId, body }) => ({
                url: `/user/${userId}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['User'],
        }),

        deleteUser: build.mutation<void, number>({
            query: (userId) => ({
                url: `/user/${userId}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetUserQuery,
    useLazyGetUserQuery,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = userApi;
