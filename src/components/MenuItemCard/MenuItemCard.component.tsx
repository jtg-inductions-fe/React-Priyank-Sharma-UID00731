import { useState } from 'react';

import { Button, Rating, TextField, Typography } from '@mui/material';

import { useDeleteMenuItemMutation, useUpdateMenuItemMutation } from '@api';
import { CustomCard, getCardImage } from '@components';

import type { MenuCardProps } from './MenuItemCard.types';

export const MenuCard = ({
    item,
    isRestaurantMenu,
    isOwner,
    restaurantId,
}: MenuCardProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(item.name);

    const [description, setDescription] = useState(item.description);

    const [price, setPrice] = useState(String(item.price));

    const [quantity, setQuantity] = useState(String(item.quantity));

    const [updateMenuItem] = useUpdateMenuItemMutation();

    const [deleteMenuItem] = useDeleteMenuItemMutation();

    const handleConfirm = async () => {
        await updateMenuItem({
            restaurantId: restaurantId,
            itemId: item.id,
            data: {
                name,
                description,
                price: Number(price),
                quantity: Number(quantity),
            },
        });

        setIsEditing(false);
    };

    const handleDelete = async () => {
        await deleteMenuItem({
            restaurantId: restaurantId,
            itemId: item.id,
        });
    };

    return (
        <CustomCard
            image={getCardImage(item.id)}
            title={
                isEditing ? (
                    <TextField
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        fullWidth
                        size="small"
                    />
                ) : (
                    name
                )
            }
            subtitle={
                <>
                    {isEditing ? (
                        <TextField
                            value={description}
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
                            fullWidth
                            multiline
                            size="small"
                        />
                    ) : (
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    )}

                    {isEditing ? (
                        <TextField
                            value={price}
                            onChange={(event) => {
                                const value = event.target.value;
                                if (value === '' || Number(value) >= 0) {
                                    setPrice(value);
                                }
                            }}
                            type="number"
                            size="small"
                            placeholder="Price"
                            slotProps={{
                                htmlInput: {
                                    min: 0,
                                },
                            }}
                        />
                    ) : (
                        <Typography variant="subtitle2">
                            Price: ${price}
                        </Typography>
                    )}

                    {isEditing ? (
                        <TextField
                            value={quantity}
                            onChange={(event) => {
                                const value = event.target.value;

                                if (value === '' || Number(value) >= 0) {
                                    setQuantity(value);
                                }
                            }}
                            type="number"
                            size="small"
                            placeholder="Quantity"
                            slotProps={{
                                htmlInput: {
                                    min: 0,
                                },
                            }}
                        />
                    ) : (
                        <Typography variant="body2" color="text.secondary">
                            {quantity}{' '}
                            {Number(quantity) === 1 ? 'item' : 'items'}{' '}
                            available
                        </Typography>
                    )}

                    <Rating value={(item.id % 5) + 1} readOnly />
                </>
            }
            actions={
                isRestaurantMenu ? (
                    isOwner ? (
                        isEditing ? (
                            <>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    onClick={() => setIsEditing(false)}
                                >
                                    Cancel
                                </Button>

                                <Button
                                    variant="contained"
                                    fullWidth
                                    onClick={() => {
                                        void handleConfirm();
                                    }}
                                >
                                    Confirm
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    onClick={() => setIsEditing(true)}
                                >
                                    Edit
                                </Button>

                                <Button
                                    variant="contained"
                                    color="error"
                                    fullWidth
                                    onClick={() => {
                                        void handleDelete();
                                    }}
                                >
                                    Delete
                                </Button>
                            </>
                        )
                    ) : (
                        <Button variant="contained" fullWidth>
                            Add To Cart
                        </Button>
                    )
                ) : undefined
            }
        />
    );
};
