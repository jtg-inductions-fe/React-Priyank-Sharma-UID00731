import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledChartContainer = styled(Stack)(({ theme }) => ({
    width: '100%',
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),

    [theme.breakpoints.down('sm')]: {
        gap: theme.spacing(1.5),
        marginTop: theme.spacing(1.5),
        padding: 0,
    },
}));
