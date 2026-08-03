import { ReactNode } from 'react';

/**
 * Represents a single item displayed in the popup menu.
 */
export type PopupMenuItem = {
    label: string;
    icon: ReactNode;
    onClick?: () => void;
};

export type PopupMenuProps = {
    anchorEl: HTMLElement | null;
    open: boolean;
    onClose: () => void;
    items: PopupMenuItem[];
};
