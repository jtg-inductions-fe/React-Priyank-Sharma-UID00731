import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, IconButton, Rating, Stack, Typography } from '@mui/material';

import { CustomCard, getCardImage } from '@components';

import type { MenuCardProps } from './MenuItemCard.types';

export const MenuCard = ({
    item,
    isRestaurantMenu,
    isOwner,
    cartQuantity = 0,
    onEdit,
    onDelete,
    onAddToCart,
    onIncrement,
    onDecrement,
}: MenuCardProps) => (
    <>
        <CustomCard
            image={getCardImage(item.id)}
            title={item.name}
            subtitle={
                <>
                    <Typography variant="body2" color="text.secondary">
                        {item.description}
                    </Typography>

                    <Typography variant="subtitle2">
                        Price: ${item.price}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {item.quantity} {item.quantity === 1 ? 'item' : 'items'}{' '}
                        available
                    </Typography>

                    <Rating value={(item.id % 5) + 1} readOnly />
                </>
            }
            actions={
                isRestaurantMenu ? (
                    isOwner ? (
                        <>
                            <Button
                                variant="outlined"
                                fullWidth
                                onClick={() => {
                                    onEdit?.(item);
                                }}
                            >
                                Edit
                            </Button>

                            <Button
                                variant="contained"
                                color="error"
                                fullWidth
                                onClick={() => {
                                    onDelete(item);
                                }}
                            >
                                Delete
                            </Button>
                        </>
                    ) : cartQuantity === 0 ? (
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={() => {
                                onAddToCart?.(item);
                            }}
                        >
                            Add To Cart
                        </Button>
                    ) : (
                        <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                            justifyContent="center"
                            width="100%"
                        >
                            <IconButton
                                size="small"
                                color="primary"
                                onClick={() => {
                                    onDecrement?.(item);
                                }}
                            >
                                <RemoveIcon fontSize="small" />
                            </IconButton>

                            <Typography variant="subtitle1">
                                {cartQuantity}
                            </Typography>

                            <IconButton
                                size="small"
                                color="primary"
                                disabled={cartQuantity >= item.quantity}
                                onClick={() => {
                                    onIncrement?.(item);
                                }}
                            >
                                <AddIcon fontSize="small" />
                            </IconButton>
                        </Stack>
                    )
                ) : undefined
            }
        />
    </>
);
