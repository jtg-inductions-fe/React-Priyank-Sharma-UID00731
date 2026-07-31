import { useGetRestaurantsQuery, useGetSortedRestaurantsQuery } from 'services';

import { Typography } from '@mui/material';

import { RestaurantSection } from '@containers';
import { useAppSelector } from '@hooks';

import { RestaurantsHeader, StyledPage } from './Restaurants.styles';

export const Restaurants = () => {
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated,
    );

    const guestQuery = useGetRestaurantsQuery(undefined, {
        skip: isAuthenticated,
    });

    const sortedQuery = useGetSortedRestaurantsQuery(undefined, {
        skip: !isAuthenticated,
    });

    const restaurants = isAuthenticated
        ? (sortedQuery.data ?? [])
        : (guestQuery.data ?? []);

    const isLoading = isAuthenticated
        ? sortedQuery.isLoading
        : guestQuery.isLoading;

    const error = isAuthenticated ? sortedQuery.error : guestQuery.error;

    return (
        <StyledPage>
            <RestaurantsHeader>
                <Typography variant="h3" gutterBottom>
                    Explore Restaurants
                </Typography>

                <Typography variant="h6" color="text.secondary">
                    Discover restaurants near you and browse their available
                    menus.
                </Typography>
            </RestaurantsHeader>

            <RestaurantSection
                restaurants={restaurants}
                isLoading={isLoading}
                error={error}
            />
        </StyledPage>
    );
};
