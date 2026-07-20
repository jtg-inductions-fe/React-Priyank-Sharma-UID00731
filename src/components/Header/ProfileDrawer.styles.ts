import { List, ListItemButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledList = styled(List)(({ theme }) => ({
    width: 280,
    paddingTop: theme.spacing(2),
}));

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
    padding: theme.spacing(2),
}));
