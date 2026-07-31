import { Footer, Header, Hero, RestaurantSection } from '@containers';

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
