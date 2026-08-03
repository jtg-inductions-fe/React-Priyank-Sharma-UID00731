import { useLocation } from 'react-router-dom';
import { useGetMyOrdersQuery } from 'services';

import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { CircularProgress, Typography } from '@mui/material';

import {
    EmptyState,
    ItemRow,
    OrderCard,
    OrderCardHeader,
    OrderIdBadge,
    OrdersHeader,
    StyledDivider,
    StyledPage,
    StyledSuccessAlert,
    TotalRow,
} from './Orders.styles';

type OrdersLocationState = {
    successMessage?: string;
};

export const Orders = () => {
    const location = useLocation();
    const state = location.state as OrdersLocationState | null;

    const { data: orders = [], isLoading, error } = useGetMyOrdersQuery();

    return (
        <StyledPage>
            <OrdersHeader>
                <Typography variant="h3" gutterBottom>
                    My Orders
                </Typography>

                <Typography variant="h6" color="text.secondary">
                    Track your past and current orders.
                </Typography>
            </OrdersHeader>

            {state?.successMessage && (
                <StyledSuccessAlert severity="success">
                    {state.successMessage}
                </StyledSuccessAlert>
            )}

            {isLoading && (
                <EmptyState>
                    <CircularProgress size={32} />
                </EmptyState>
            )}

            {!isLoading && error && (
                <EmptyState>
                    <Typography color="error">
                        Failed to load orders. Please try again.
                    </Typography>
                </EmptyState>
            )}

            {!isLoading && !error && orders.length === 0 && (
                <EmptyState>
                    <ReceiptLongIcon fontSize="large" />
                    <Typography variant="h6" gutterBottom>
                        No orders yet
                    </Typography>
                    <Typography color="text.secondary">
                        Your placed orders will show up here.
                    </Typography>
                </EmptyState>
            )}

            {!isLoading &&
                !error &&
                orders.map((order) => (
                    <OrderCard key={order.id} elevation={1}>
                        <OrderCardHeader>
                            <OrderIdBadge>Order #{order.id}</OrderIdBadge>

                            <Typography variant="body2" color="text.secondary">
                                {new Date(order.created_at).toLocaleString(
                                    undefined,
                                    {
                                        dateStyle: 'medium',
                                        timeStyle: 'short',
                                    },
                                )}
                            </Typography>
                        </OrderCardHeader>

                        <StyledDivider />

                        {order.order_items.map((item) => (
                            <ItemRow key={item.id}>
                                <Typography variant="body2">
                                    {item.menu_item.name} x {item.quantity}
                                </Typography>

                                <Typography variant="body2" fontWeight={600}>
                                    $
                                    {(
                                        item.menu_item.price * item.quantity
                                    ).toFixed(2)}
                                </Typography>
                            </ItemRow>
                        ))}

                        <TotalRow>
                            <Typography variant="subtitle1" fontWeight={700}>
                                Total
                            </Typography>

                            <Typography
                                variant="subtitle1"
                                fontWeight={700}
                                color="primary"
                            >
                                ${Number(order.total_amount).toFixed(2)}
                            </Typography>
                        </TotalRow>
                    </OrderCard>
                ))}
        </StyledPage>
    );
};
