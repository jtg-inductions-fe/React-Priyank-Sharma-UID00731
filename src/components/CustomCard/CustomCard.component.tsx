import { Typography } from '@mui/material';

import {
    ImageContainer,
    StyledCard,
    StyledCardActions,
    StyledCardContent,
    StyledImage,
} from './CustomCard.styles';
import type { CustomCardProps } from './CustomCard.types';

export const CustomCard = ({
    image,
    title,
    imageAlt,
    subtitle,
    actions,
}: CustomCardProps) => (
    <StyledCard elevation={3}>
        <ImageContainer>
            <StyledImage src={image} alt={imageAlt} />
        </ImageContainer>

        <StyledCardContent>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>

            {subtitle}
        </StyledCardContent>

        {actions && <StyledCardActions>{actions}</StyledCardActions>}
    </StyledCard>
);
