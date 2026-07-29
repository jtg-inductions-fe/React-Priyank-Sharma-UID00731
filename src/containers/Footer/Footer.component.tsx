import { Container, Typography } from '@mui/material';

import { FooterContent, FooterWrapper } from './Footer.styles';

export const Footer = () => (
    <FooterWrapper>
        <Container maxWidth="lg">
            <FooterContent>
                <Typography variant="h5" color="primary">
                    EatPlex
                </Typography>

                <Typography variant="body1" color="text.primary">
                    Discover restaurants, explore menus, and order your favorite
                    meals with ease.
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    © 2026 EatPlex. All rights reserved.
                </Typography>
            </FooterContent>
        </Container>
    </FooterWrapper>
);
