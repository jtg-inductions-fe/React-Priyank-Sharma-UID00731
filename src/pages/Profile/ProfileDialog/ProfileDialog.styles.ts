import { Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FormContainer = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(2),
    marginTop: theme.spacing(1),
}));

export const ActionButton = styled(Button)(({ theme }) => ({
    minWidth: 120,

    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}));
