import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LayoutContainer = styled(Box)({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
});

export const MainContent = styled('main')({
    flex: 1,
});
