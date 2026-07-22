import { Typography } from '@mui/material';

import { useGetRestaurantsQuery } from '@api';
import { RestaurantCard } from '@components/RestaurantCard';

import {
    RestaurantGrid,
    StyledContainer,
    StyledSection,
} from './RestaurantSection.styles';

export const RestaurantSection = () => {
    const {
        data: restaurants = [],
        isLoading,
        error,
    } = useGetRestaurantsQuery();

    if (isLoading) {
        return (
            <StyledSection>
                <StyledContainer maxWidth="lg">
                    <Typography>Loading restaurants...</Typography>
                </StyledContainer>
            </StyledSection>
        );
    }

    if (error) {
        return (
            <StyledSection>
                <StyledContainer maxWidth="lg">
                    <Typography>Failed to load restaurants.</Typography>
                </StyledContainer>
            </StyledSection>
        );
    }

    return (
        <StyledSection>
            <StyledContainer maxWidth="lg">
                <Typography variant="h4">Restaurants</Typography>

                <RestaurantGrid>
                    {restaurants.map((restaurant) => (
                        <RestaurantCard
                            key={restaurant.id}
                            restaurant={restaurant}
                        />
                    ))}
                </RestaurantGrid>
            </StyledContainer>
        </StyledSection>
    );
};
