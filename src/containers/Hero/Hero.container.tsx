import { Box, Container } from '@mui/material';

import HeroImageFile from '@assets/images/hero-image.png';

import {
    ButtonContainer,
    Description,
    Heading,
    HeroButton,
    HeroImage,
    HeroSection,
    LeftSection,
    RightSection,
    Timing,
    WelcomeText,
} from './Hero.styles';

export const Hero = () => (
    <Box component="section">
        <Container maxWidth="lg">
            <HeroSection>
                <LeftSection>
                    <WelcomeText variant="h6" marginBottom={2}>
                        Fresh & Delicious
                    </WelcomeText>

                    <Heading variant="h2" marginBottom={2}>
                        Enjoy Your{' '}
                        <Box component="span" color="primary.main">
                            Favourite
                        </Box>
                        <Box component="span" display="block">
                            Food Anytime
                        </Box>
                    </Heading>

                    <Description variant="body1" marginBottom={3}>
                        Discover amazing restaurants near you. Explore menus,
                        browse delicious dishes and enjoy freshly prepared food
                        delivered to your doorstep.
                    </Description>

                    <ButtonContainer>
                        <HeroButton variant="contained" color="primary">
                            Explore Restaurants
                        </HeroButton>

                        <HeroButton variant="outlined">Browse Menu</HeroButton>
                    </ButtonContainer>

                    <Timing variant="body2">
                        Open Everyday • 10:00 AM - 11:00 PM
                    </Timing>
                </LeftSection>

                <RightSection>
                    <HeroImage src={HeroImageFile} alt="Delicious food" />
                </RightSection>
            </HeroSection>
        </Container>
    </Box>
);
