import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPageContainer = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(4),
}));
