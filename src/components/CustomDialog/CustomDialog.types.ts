import type { ReactNode } from 'react';

import type { ButtonProps, DialogProps } from '@mui/material';

export type DialogMode = 'add' | 'edit' | 'delete';

export interface CustomDialogProps {
    open: boolean;
    title: ReactNode;
    children: ReactNode;
    onClose: () => void;
    onConfirm: () => void;
    confirmButtonText: string;
    cancelButtonText?: string;
    confirmColor?: ButtonProps['color'];
    loading?: boolean;
    maxWidth?: DialogProps['maxWidth'];
    fullWidth?: boolean;
    disableConfirm?: boolean;
}
