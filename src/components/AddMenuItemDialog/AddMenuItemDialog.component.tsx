import { useState } from 'react';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from '@mui/material';

import { useCreateMenuItemMutation } from '@api';

import type { AddMenuItemDialogProps } from './AddMenuItemDialog.types';

export const AddMenuItemDialog = ({
    open,
    restaurantId,
    onClose,
}: AddMenuItemDialogProps) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const [createMenuItem, { isLoading }] = useCreateMenuItemMutation();

    const handleConfirm = async () => {
        await createMenuItem({
            restaurantId,
            data: {
                name,
                description,
                price: Number(price),
                quantity: Number(quantity),
            },
        });

        onClose();
        setName('');
        setDescription('');
        setPrice('');
        setQuantity('');
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>Add Menu Item</DialogTitle>

            <DialogContent>
                <TextField
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    label="Name"
                    fullWidth
                    margin="normal"
                />

                <TextField
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
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
                    label="Price"
                    type="number"
                    fullWidth
                    margin="normal"
                />

                <TextField
                    value={quantity}
                    onChange={(event) => {
                        const value = event.target.value;

                        if (value === '' || Number(value) >= 0) {
                            setQuantity(value);
                        }
                    }}
                    label="Quantity"
                    type="number"
                    fullWidth
                    margin="normal"
                />
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>

                <Button
                    variant="contained"
                    onClick={() => {
                        void handleConfirm();
                    }}
                    disabled={isLoading}
                >
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
};
