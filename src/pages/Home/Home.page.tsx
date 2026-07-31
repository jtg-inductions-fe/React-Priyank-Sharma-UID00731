import { useGetRestaurantsQuery } from 'services';

import { Hero, RestaurantSection } from '@containers';

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

            <RestaurantSection
                title="Featured Restaurants"
                restaurants={restaurants}
                isLoading={isLoading}
                error={error}
            />
        </>
    );
};
