import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPageContainer = styled(Stack)(({ theme }) => ({
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
}));
