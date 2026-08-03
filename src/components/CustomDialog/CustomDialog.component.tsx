import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material';

import type { CustomDialogProps } from './CustomDialog.types';

export const CustomDialog = ({
    open,
    title,
    children,
    onClose,
    onConfirm,
    confirmButtonText,
    cancelButtonText = 'Cancel',
    confirmColor = 'primary',
    loading = false,
    maxWidth = 'sm',
    fullWidth = true,
    disableConfirm = false,
}: CustomDialogProps) => (
    <Dialog
        open={open}
        onClose={onClose}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
    >
        <DialogTitle>{title}</DialogTitle>

        <DialogContent>{children}</DialogContent>

        <DialogActions>
            <Button onClick={onClose}>{cancelButtonText}</Button>

            <Button
                variant="contained"
                color={confirmColor}
                disabled={loading || disableConfirm}
                onClick={() => {
                    onConfirm();
                }}
            >
                {confirmButtonText}
            </Button>
        </DialogActions>
    </Dialog>
);
