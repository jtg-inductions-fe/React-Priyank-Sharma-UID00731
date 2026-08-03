import { ListItemIcon, ListItemText } from '@mui/material';

import { StyledMenu, StyledMenuItem } from './PopupMenu.styles';
import { PopupMenuProps } from './PopupMenu.types';

export const PopupMenu = ({
    anchorEl,
    open,
    onClose,
    items,
}: PopupMenuProps) => (
    <StyledMenu anchorEl={anchorEl} open={open} onClose={onClose}>
        {items.map((item) => (
            <StyledMenuItem
                key={item.label}
                onClick={() => {
                    if (item.onClick) {
                        item.onClick();
                    }

                    onClose();
                }}
            >
                <ListItemIcon>{item.icon}</ListItemIcon>

                <ListItemText primary={item.label} />
            </StyledMenuItem>
        ))}
    </StyledMenu>
);
