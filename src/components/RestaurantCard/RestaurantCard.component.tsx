import { Typography } from '@mui/material';

import {
    ImageContainer,
    RestaurantImage,
    StyledCard,
    StyledCardActions,
    StyledCardContent,
    StyledLocation,
    ViewMenuButton,
} from './RestaurantCard.styles';
import type { RestaurantCardProps } from './RestaurantCard.types';
import { getRestaurantImage } from './restaurantImages';

export const RestaurantCard = ({ restaurant }: RestaurantCardProps) => (
    <StyledCard elevation={3}>
        <ImageContainer>
            <RestaurantImage
                src={getRestaurantImage(restaurant.id)}
                alt={restaurant.name}
            />
        </ImageContainer>

        <StyledCardContent>
            <Typography variant="h6" gutterBottom>
                {restaurant.name}
            </Typography>

            <StyledLocation>
                <Typography variant="body2" color="text.secondary">
                    {restaurant.city}, {restaurant.state}
                </Typography>
            </StyledLocation>
        </StyledCardContent>

        <StyledCardActions>
            <ViewMenuButton variant="contained">View Menu</ViewMenuButton>
        </StyledCardActions>
    </StyledCard>
);
