import type { Restaurant } from '@types';

import { baseApi } from './baseApi';

export const restaurantApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getRestaurants: build.query<Restaurant[], void>({
            query: () => '/restaurants',
        }),
    }),
    overrideExisting: false,
});

export const { useGetRestaurantsQuery } = restaurantApi;
