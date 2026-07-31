import type { Order, OrderCreatePayload } from '@types';

import { baseApi } from './base.service';

export const orderApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        placeOrder: build.mutation<Order, OrderCreatePayload>({
            query: (data) => ({
                url: '/order/',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['MenuItems', 'User', 'Orders'],
        }),
        getMyOrders: build.query<Order[], void>({
            query: () => '/orders/',
            providesTags: ['Orders'],
        }),
    }),
    overrideExisting: false,
});

export const { usePlaceOrderMutation, useGetMyOrdersQuery } = orderApi;
