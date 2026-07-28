import { NavLink } from 'react-router-dom';

import { Button, Typography } from '@mui/material';

import { useGetUserQuery } from '@api';
import { CardSection, CustomCard } from '@components';
import { getCardImage } from '@components';
import { APP_ROUTES } from '@constants';
import { useAppSelector } from '@hooks';

import { RestaurantsHeader, StyledPage } from './MyRestaurant.styles';

export const MyRestaurant = () => {
    const userId = useAppSelector((state) => state.auth.user?.id);

    const {
        data: user,
        isLoading,
        error,
    } = useGetUserQuery(userId as number, {
        skip: !userId,
    });

    const restaurants = user?.restaurants ?? [];

    return (
        <StyledPage>
            <RestaurantsHeader>
                <Typography variant="h3" gutterBottom>
                    My Restaurants
                </Typography>

                <Typography variant="h6" color="text.secondary">
                    View your restaurants and explore their menus.
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
