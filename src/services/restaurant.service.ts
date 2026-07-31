import type { MenuStat, Order, Restaurant, TopCustomer } from '@types';

import { baseApi } from './base.service';

export const restaurantApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getRestaurants: build.query<Restaurant[], void>({
            query: () => '/restaurants',
        }),
        getSortedRestaurants: build.query<Restaurant[], void>({
            query: () => '/restaurants/sorted',
        }),
        getRestaurantOrders: build.query<Order[], number>({
            query: (restaurantId) => `/restaurants/${restaurantId}/orders`,
        }),

        getMenuStats: build.query<MenuStat[], number>({
            query: (restaurantId) => `/restaurants/${restaurantId}/stats/menu`,
        }),

        getTopCustomers: build.query<TopCustomer[], number>({
            query: (restaurantId) =>
                `/restaurants/${restaurantId}/stats/customers`,
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetRestaurantsQuery,
    useGetSortedRestaurantsQuery,
    useGetRestaurantOrdersQuery,
    useGetMenuStatsQuery,
    useGetTopCustomersQuery,
} = restaurantApi;
