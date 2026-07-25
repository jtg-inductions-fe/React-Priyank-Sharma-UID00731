import { Stack, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledFormContainer = styled(Stack)(({ theme }) => ({
    width: '100%',
    maxWidth: '40rem',
    margin: '0 auto',
    padding: theme.spacing(4),
    alignItems: 'center',
}));

export const StyledForm = styled('form')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
}));

export const StyledTextField = styled(TextField)({
    width: '100%',
});
