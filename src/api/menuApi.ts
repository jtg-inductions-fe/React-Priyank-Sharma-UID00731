import type {
    CreateMenuItemPayload,
    MenuItem,
    UpdateMenuItemPayload,
} from '@types';

import { baseApi } from './baseApi';

export const menuApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMenuItems: build.query<MenuItem[], number | undefined>({
            query: (restaurantId) => ({
                url: '/menu',
                params: restaurantId
                    ? { restaurant_id: restaurantId }
                    : undefined,
            }),
            providesTags: ['MenuItems'],
        }),
        createMenuItem: build.mutation<
            MenuItem,
            {
                restaurantId: number;
                data: CreateMenuItemPayload;
            }
        >({
            query: ({ restaurantId, data }) => ({
                url: `/restaurants/${restaurantId}/menu/`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['MenuItems'],
        }),
        updateMenuItem: build.mutation<
            MenuItem,
            {
                restaurantId: number;
                itemId: number;
                data: UpdateMenuItemPayload;
            }
        >({
            query: ({ restaurantId, itemId, data }) => ({
                url: `/restaurants/${restaurantId}/menu/${itemId}/`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['MenuItems'],
        }),
        deleteMenuItem: build.mutation<
            void,
            {
                restaurantId: number;
                itemId: number;
            }
        >({
            query: ({ restaurantId, itemId }) => ({
                url: `/restaurants/${restaurantId}/menu/${itemId}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['MenuItems'],
        }),
    }),

    overrideExisting: false,
});

export const {
    useGetMenuItemsQuery,
    useCreateMenuItemMutation,
    useUpdateMenuItemMutation,
    useDeleteMenuItemMutation,
} = menuApi;
