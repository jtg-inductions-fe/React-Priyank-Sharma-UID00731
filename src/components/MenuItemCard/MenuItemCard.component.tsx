import { Button, Rating, Typography } from '@mui/material';

import { CustomCard, getCardImage } from '@components';

import type { MenuCardProps } from './MenuItemCard.types';

export const MenuCard = ({
    item,
    isRestaurantMenu,
    isOwner,
    onEdit,
    onDelete,
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
                    ) : (
                        <Button variant="contained" fullWidth>
                            Add To Cart
                        </Button>
                    )
                ) : undefined
            }
        />
    </>
);
