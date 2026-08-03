import { NavLink, useNavigate } from 'react-router-dom';

import { Button, Typography } from '@mui/material';

import { APP_ROUTES } from '@constants';

import { ButtonGroup, ErrorCode, StyledPage } from './NotFound.styles';

/**
 * Displays the Not Found page.
 */
export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <StyledPage>
            <ErrorCode>404</ErrorCode>

            <Typography variant="h4" gutterBottom>
                Page Not Found
            </Typography>

            <Typography variant="body1" color="text.secondary">
                The page you&apos;re looking for doesn&apos;t exist or may have
                been moved.
            </Typography>

            <ButtonGroup>
                <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => {
                        void navigate(-1);
                    }}
                >
                    Go Back
                </Button>

                <Button
                    component={NavLink}
                    to={APP_ROUTES.HOME}
                    variant="contained"
                    fullWidth
                >
                    Back to Home
                </Button>
            </ButtonGroup>
        </StyledPage>
    );
};
