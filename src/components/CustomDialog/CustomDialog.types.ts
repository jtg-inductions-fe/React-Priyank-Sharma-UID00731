import type { MenuItem } from '@types';

export type DialogMode = 'add' | 'edit' | 'delete';

export type CustomDialogProps = {
    open: boolean;
    mode: 'add' | 'edit' | 'delete';
    restaurantId: number;
    item?: MenuItem;
    title: string;
    confirmButtonText: string;
    onClose: () => void;
};
