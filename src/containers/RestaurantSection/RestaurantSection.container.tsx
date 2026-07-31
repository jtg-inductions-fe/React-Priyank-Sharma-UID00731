import { Typography } from '@mui/material';

import { RestaurantCard } from '@components';

import {
    RestaurantGrid,
    StyledContainer,
    StyledSection,
} from './RestaurantSection.styles';
import type { RestaurantSectionProps } from './RestaurantSection.types';

export const RestaurantSection = ({
    title,
    restaurants,
    isLoading,
    error,
}: RestaurantSectionProps) => {
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

    if (restaurants.length === 0) {
        return (
            <StyledSection>
                <StyledContainer maxWidth="lg">
                    <Typography>No restaurants found.</Typography>
                </StyledContainer>
            </StyledSection>
        );
    }

    return (
        <StyledSection>
            <StyledContainer maxWidth="lg">
                {title && (
                    <Typography variant="h4" gutterBottom>
                        {title}
                    </Typography>
                )}

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
