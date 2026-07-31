import type { Restaurant } from '@types';

import { baseApi } from './base.service';

export const restaurantApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getRestaurants: build.query<Restaurant[], void>({
            query: () => '/restaurants',
        }),
        getSortedRestaurants: build.query<Restaurant[], void>({
            query: () => '/restaurants/sorted',
        }),
    }),
    overrideExisting: false,
});

export const { useGetRestaurantsQuery, useGetSortedRestaurantsQuery } =
    restaurantApi;
