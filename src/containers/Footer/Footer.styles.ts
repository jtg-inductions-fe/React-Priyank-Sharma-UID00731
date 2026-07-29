import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FooterWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
}));

export const FooterContent = styled(Stack)(({ theme }) => ({
    alignItems: 'center',
    textAlign: 'center',
    gap: theme.spacing(1),
}));
