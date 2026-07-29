import { Footer, Hero } from 'containers';

import { Header, RestaurantSection } from '@components';

/**
 * Displays the application home page.
 *
 * @returns Home page component.
 */
export const Home = () => (
    <>
        <Header />
        <Hero />
        <RestaurantSection />
        <Footer />
    </>
);
