import { Box, Card, CardActions, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    borderRadius: theme.spacing(2),
}));

export const ImageContainer = styled(Box)({
    height: 200,
    overflow: 'hidden',
});

export const StyledImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
});

export const StyledCardContent = styled(CardContent)({
    flexGrow: 1,
});

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
    padding: theme.spacing(2),
}));
