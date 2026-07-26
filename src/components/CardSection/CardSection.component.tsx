import { Typography } from '@mui/material';

import { CardGrid, StyledContainer, StyledSection } from './CardSection.styles';
import type { CardSectionProps } from './CardSection.types';

export const CardSection = <T,>({
    title,
    items,
    isLoading,
    error,
    emptyMessage,
    loadingMessage = 'Loading...',
    errorMessage = 'Failed to load data.',
    renderCard,
}: CardSectionProps<T>) => {
    if (isLoading) {
        return (
            <StyledSection>
                <StyledContainer maxWidth="lg">
                    <Typography>{loadingMessage}</Typography>
                </StyledContainer>
            </StyledSection>
        );
    }

    if (error) {
        return (
            <StyledSection>
                <StyledContainer maxWidth="lg">
                    <Typography>{errorMessage}</Typography>
                </StyledContainer>
            </StyledSection>
        );
    }

    if (items.length === 0) {
        return (
            <StyledSection>
                <StyledContainer maxWidth="lg">
                    <Typography>{emptyMessage}</Typography>
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

                <CardGrid>{items.map(renderCard)}</CardGrid>
            </StyledContainer>
        </StyledSection>
    );
};
