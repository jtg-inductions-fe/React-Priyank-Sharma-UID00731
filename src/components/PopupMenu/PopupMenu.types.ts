import { ReactNode } from 'react';

/**
 * Represents a single item displayed in the popup menu.
 */
export interface PopupMenuItem {
    label: string;
    icon: ReactNode;
    onClick?: () => void;
}
