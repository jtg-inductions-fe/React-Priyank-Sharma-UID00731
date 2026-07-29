import { NavLink } from 'react-router-dom';

import { Button, Typography } from '@mui/material';

import { useGetRestaurantsQuery } from '@api';
import { CustomCard } from '@components';
import { getCardImage } from '@components';
import { APP_ROUTES } from '@constants';
import { CardSection, Hero } from '@containers';

/**
 * Displays the application home page.
 *
 * @returns Home page component.
 */
export const Home = () => {
    const {
        data: restaurants = [],
        isLoading,
        error,
    } = useGetRestaurantsQuery();

    return (
        <>
            <Hero />

            <CardSection
                title="Featured Restaurants"
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
        </>
    );
};
