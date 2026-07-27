import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from '@mui/material';

import type { ConfirmationDialogProps } from './ConfirmationDialog.types';

export const ConfirmationDialog = ({
    open,
    title,
    message,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    isLoading = false,
    onConfirm,
    onClose,
}: ConfirmationDialogProps) => (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
        <DialogTitle>{title}</DialogTitle>

        <DialogContent>
            <Typography>{message}</Typography>
        </DialogContent>

        <DialogActions>
            <Button onClick={onClose}>{cancelText}</Button>

            <Button
                variant="contained"
                color="error"
                disabled={isLoading}
                onClick={onConfirm}
            >
                {confirmText}
            </Button>
        </DialogActions>
    </Dialog>
);
