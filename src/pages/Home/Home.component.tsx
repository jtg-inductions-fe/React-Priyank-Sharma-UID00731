import { useGetRestaurantsQuery } from '@api';
import { RestaurantSection } from '@components';
import { Hero } from '@containers';

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
