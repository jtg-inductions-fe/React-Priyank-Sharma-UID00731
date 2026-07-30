import { useNavigate } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, IconButton, Stack, Typography } from '@mui/material';

import { usePlaceOrderMutation } from '@api';
import { APP_ROUTES } from '@constants';
import {
    clearCart,
    decrementItem,
    incrementItem,
    removeItem,
} from '@features/cart';
import { useAppDispatch, useAppSelector } from '@hooks';

import {
    CartFooter,
    CartHeader,
    CartItemRow,
    StyledAlert,
    StyledPage,
} from './Cart.styles';

export const Cart = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const cart = useAppSelector((state) => state.cart);
    const auth = useAppSelector((state) => state.auth);

    const [placeOrder, { isLoading, error }] = usePlaceOrderMutation();

    const total = cart.items.reduce(
        (sum, cartItem) => sum + cartItem.menu_item.price * cartItem.quantity,
        0,
    );

    const handlePlaceOrder = async () => {
        if (!auth.isAuthenticated) {
            void navigate(APP_ROUTES.LOGIN);
            return;
        }

        if (!cart.restaurantId || cart.items.length === 0) {
            return;
        }

        try {
            await placeOrder({
                restaurant_id: cart.restaurantId,
                items: cart.items.map((cartItem) => ({
                    menu_item_id: cartItem.menu_item.id,
                    quantity: cartItem.quantity,
                })),
            }).unwrap();

            dispatch(clearCart());
        } catch {
            // Surfaced to the user via the `error` state below.
        }
    };

    return (
        <StyledPage>
            <CartHeader>
                <Typography variant="h3" gutterBottom>
                    Your Cart
                </Typography>

                <Typography variant="h6" color="text.secondary">
                    Review your items before placing the order.
                </Typography>
            </CartHeader>

            {cart.items.length === 0 ? (
                <>
                    <Typography color="text.secondary" gutterBottom>
                        Your cart is empty.
                    </Typography>

                    <Button
                        variant="contained"
                        onClick={() => {
                            void navigate(APP_ROUTES.RESTAURANTS);
                        }}
                    >
                        Browse Restaurants
                    </Button>
                </>
            ) : (
                <>
                    {cart.items.map((cartItem) => (
                        <CartItemRow key={cartItem.menu_item.id}>
                            <Stack spacing={0.5}>
                                <Typography variant="subtitle1">
                                    {cartItem.menu_item.name}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    ${cartItem.menu_item.price} x{' '}
                                    {cartItem.quantity}
                                </Typography>
                            </Stack>

                            <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                            >
                                <IconButton
                                    size="small"
                                    onClick={() => {
                                        dispatch(
                                            decrementItem(
                                                cartItem.menu_item.id,
                                            ),
                                        );
                                    }}
                                >
                                    <RemoveIcon fontSize="small" />
                                </IconButton>

                                <Typography>{cartItem.quantity}</Typography>

                                <IconButton
                                    size="small"
                                    disabled={
                                        cartItem.quantity >=
                                        cartItem.menu_item.quantity
                                    }
                                    onClick={() => {
                                        dispatch(
                                            incrementItem(
                                                cartItem.menu_item.id,
                                            ),
                                        );
                                    }}
                                >
                                    <AddIcon fontSize="small" />
                                </IconButton>

                                <Button
                                    size="small"
                                    color="error"
                                    onClick={() => {
                                        dispatch(
                                            removeItem(cartItem.menu_item.id),
                                        );
                                    }}
                                >
                                    Remove
                                </Button>
                            </Stack>
                        </CartItemRow>
                    ))}

                    <CartFooter>
                        {error && (
                            <StyledAlert severity="error">
                                Failed to place order. Please check your balance
                                and try again.
                            </StyledAlert>
                        )}

                        <Typography variant="h5" gutterBottom>
                            Total: ${total.toFixed(2)}
                        </Typography>

                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                            disabled={isLoading}
                            onClick={() => {
                                void handlePlaceOrder();
                            }}
                        >
                            {isLoading ? 'Placing Order...' : 'Place Order'}
                        </Button>
                    </CartFooter>
                </>
            )}
        </StyledPage>
    );
};
