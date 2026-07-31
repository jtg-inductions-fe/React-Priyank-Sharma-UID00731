import { NavLink } from 'react-router-dom';
import { useGetRestaurantsQuery, useGetSortedRestaurantsQuery } from 'services';

import { Button, Typography } from '@mui/material';

import { CustomCard } from '@components';
import { getCardImage } from '@components';
import { APP_ROUTES } from '@constants';
import { CardSection } from '@containers';
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

            <CardSection
                items={restaurants}
                isLoading={isLoading}
                error={error}
                emptyMessage="No restaurants found."
                loadingMessage="Loading restaurants..."
                errorMessage="Failed to load restaurants."
                renderCard={(restaurant) => (
                    <CustomCard
                        key={restaurant.id}
                        image={getCardImage(restaurant.id)}
                        title={restaurant.name}
                        subtitle={
                            <Typography variant="body2" color="text.secondary">
                                {restaurant.city}, {restaurant.state}
                            </Typography>
                        }
                        actions={
                            <Button
                                component={NavLink}
                                to={`${APP_ROUTES.MENU}/${restaurant.id}`}
                                variant="contained"
                                fullWidth
                            >
                                View Menu
                            </Button>
                        }
                    />
                )}
            />
        </StyledPage>
    );
};
