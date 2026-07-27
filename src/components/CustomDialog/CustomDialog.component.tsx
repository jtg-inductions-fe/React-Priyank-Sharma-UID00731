import { useEffect, useState } from 'react';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Typography,
} from '@mui/material';

import {
    useCreateMenuItemMutation,
    useDeleteMenuItemMutation,
    useUpdateMenuItemMutation,
} from '@api';

import type { CustomDialogProps } from './CustomDialog.types';

export const CustomDialog = ({
    open,
    mode,
    restaurantId,
    item,
    title,
    confirmButtonText,
    onClose,
}: CustomDialogProps) => {
    const [name, setName] = useState(item?.name ?? '');

    const [description, setDescription] = useState(item?.description ?? '');

    const [price, setPrice] = useState(item ? String(item.price) : '');

    const [quantity, setQuantity] = useState(item ? String(item.quantity) : '');

    const [error, setError] = useState('');

    useEffect(() => {
        setName(item?.name ?? '');
        setDescription(item?.description ?? '');
        setPrice(item ? String(item.price) : '');
        setQuantity(item ? String(item.quantity) : '');
        setError('');
    }, [item, open]);

    const [createMenuItem, { isLoading }] = useCreateMenuItemMutation();

    const [updateMenuItem] = useUpdateMenuItemMutation();

    const [deleteMenuItem] = useDeleteMenuItemMutation();

    const validateForm = () => {
        if (name.trim().length < 2) {
            return 'Name must be at least 2 characters.';
        }

        if (description.trim().length < 5) {
            return 'Description must be at least 5 characters.';
        }

        if (price === '' || Number(price) < 0) {
            return 'Price must be 0 or greater.';
        }

        if (quantity === '' || Number(quantity) < 0) {
            return 'Quantity must be 0 or greater.';
        }

        return '';
    };

    const handleNumberKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        if (['e', 'E', '+', '-'].includes(event.key)) {
            event.preventDefault();
        }
    };

    const handleConfirm = async () => {
        const validationError = validateForm();

        if (validationError) {
            setError(validationError);
            return;
        }

        setError('');

        switch (mode) {
            case 'add':
                await createMenuItem({
                    restaurantId,
                    data: {
                        name,
                        description,
                        price: Number(price),
                        quantity: Number(quantity),
                    },
                });
                break;

            case 'edit':
                await updateMenuItem({
                    restaurantId,
                    itemId: item!.id,
                    data: {
                        name,
                        description,
                        price: Number(price),
                        quantity: Number(quantity),
                    },
                });
                break;

            case 'delete':
                await deleteMenuItem({
                    restaurantId,
                    itemId: item!.id,
                });
                break;
        }

        onClose();

        setName('');
        setDescription('');
        setPrice('');
        setQuantity('');
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>{title}</DialogTitle>

            <DialogContent>
                {error && <Typography color="error">{error}</Typography>}
                {mode === 'delete' ? (
                    <Typography>
                        Are you sure you want to delete {item?.name}?
                    </Typography>
                ) : (
                    <>
                        <TextField
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            label="Name"
                            fullWidth
                            margin="normal"
                        />

                        <TextField
                            value={description}
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
                            label="Description"
                            fullWidth
                            multiline
                            margin="normal"
                        />

                        <TextField
                            value={price}
                            onChange={(event) => {
                                const value = event.target.value;

                                if (value === '' || Number(value) >= 0) {
                                    setPrice(value);
                                }
                            }}
                            onKeyDown={handleNumberKeyDown}
                            label="Price"
                            type="number"
                            fullWidth
                            margin="normal"
                            slotProps={{
                                htmlInput: {
                                    min: 0,
                                },
                            }}
                        />

                        <TextField
                            value={quantity}
                            onChange={(event) => {
                                const value = event.target.value;

                                if (value === '' || Number(value) >= 0) {
                                    setQuantity(value);
                                }
                            }}
                            onKeyDown={handleNumberKeyDown}
                            label="Quantity"
                            type="number"
                            fullWidth
                            margin="normal"
                            slotProps={{
                                htmlInput: {
                                    min: 0,
                                },
                            }}
                        />
                    </>
                )}
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>

                <Button
                    variant="contained"
                    color={mode === 'delete' ? 'error' : 'primary'}
                    onClick={() => {
                        void handleConfirm();
                    }}
                    disabled={isLoading}
                >
                    {confirmButtonText}
                </Button>
            </DialogActions>
        </Dialog>
    );
};
