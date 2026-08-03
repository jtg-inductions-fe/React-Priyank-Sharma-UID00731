import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeroSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5rem',
    width: '100%',
    padding: '7rem 0',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column-reverse',
        textAlign: 'center',
        gap: '3rem',
        padding: '5rem 0',
    },
}));

export const LeftSection = styled(Box)(({ theme }) => ({
    flex: 1.2,
    [theme.breakpoints.down('md')]: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

export const RightSection = styled(Box)(({ theme }) => ({
    flex: 0.8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        flex: 1,
        width: '100%',
    },
}));

export const WelcomeText = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 600,
}));

export const Heading = styled(Typography)(() => ({
    fontWeight: 700,
    marginBottom: '2rem',
}));

export const Description = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    lineHeight: 1.8,
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '1.6rem',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        flexDirection: 'column',
    },
}));

export const HeroButton = styled(Button)(() => ({
    padding: '1.2rem 3rem',
    borderRadius: '1rem',
    textTransform: 'none',
    fontWeight: 600,
}));

export const Timing = styled(Typography)(({ theme }) => ({
    marginTop: '2.5rem',
    color: theme.palette.text.secondary,
}));

export const HeroImage = styled('img')(({ theme }) => ({
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    filter: 'drop-shadow(0 20px 30px rgba(0,0,0,.15))',
    [theme.breakpoints.down('md')]: {
        width: '80%',
    },
    [theme.breakpoints.down('sm')]: {
        width: '70%',
    },
}));
