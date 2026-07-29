import { useState } from 'react';

import {
    Alert,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';

import {
    useGetMenuStatsQuery,
    useGetRestaurantOrdersQuery,
    useGetTopCustomersQuery,
} from '@api';
import { useAppSelector } from '@hooks';

import {
    CUSTOMER_COLUMNS,
    MENU_COLUMNS,
    ORDER_COLUMNS,
    STATISTICS_SECTIONS,
} from './Statistics.constants';
import { HeaderSection, Section, StyledPage } from './Statistics.styles';

export const Statistics = () => {
    const user = useAppSelector((state) => state.auth.user);

    const restaurants = user?.restaurants ?? [];

    const [selectedRestaurantId, setSelectedRestaurantId] = useState<
        number | ''
    >('');

    const restaurantId =
        selectedRestaurantId === '' ? undefined : selectedRestaurantId;

    const {
        data: orders = [],
        isLoading: ordersLoading,
        error: ordersError,
    } = useGetRestaurantOrdersQuery(restaurantId!, {
        skip: !restaurantId,
    });

    const {
        data: menuStats = [],
        isLoading: menuLoading,
        error: menuError,
    } = useGetMenuStatsQuery(restaurantId!, {
        skip: !restaurantId,
    });

    const {
        data: topCustomers = [],
        isLoading: customersLoading,
        error: customersError,
    } = useGetTopCustomersQuery(restaurantId!, {
        skip: !restaurantId,
    });

    const [showAllOrders, setShowAllOrders] = useState(false);

    const visibleOrders = showAllOrders ? orders : orders.slice(0, 5);

    const renderTable = (
        section: (typeof STATISTICS_SECTIONS)[number]['key'],
    ) => {
        switch (section) {
            case 'orders':
                return (
                    <>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {ORDER_COLUMNS.map((column) => (
                                        <TableCell key={column}>
                                            {column}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {visibleOrders.map((order) => (
                                    <TableRow key={order.id}>
                                        <TableCell>#{order.id}</TableCell>

                                        <TableCell>
                                            {new Date(
                                                order.created_at,
                                            ).toLocaleDateString()}
                                        </TableCell>

                                        <TableCell>
                                            ₹{order.total_amount}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                        {orders.length > 5 && (
                            <Button
                                variant="text"
                                onClick={() =>
                                    setShowAllOrders((prev) => !prev)
                                }
                            >
                                {showAllOrders ? 'Show Less' : 'Show More'}
                            </Button>
                        )}
                    </>
                );

            case 'menu':
                return (
                    <Table>
                        <TableHead>
                            <TableRow>
                                {MENU_COLUMNS.map((column) => (
                                    <TableCell key={column}>{column}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {menuStats.map((item) => (
                                <TableRow key={item.menu_item_name}>
                                    <TableCell>{item.menu_item_name}</TableCell>

                                    <TableCell>{item.order_count}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                );

            case 'customers':
                return (
                    <Table>
                        <TableHead>
                            <TableRow>
                                {CUSTOMER_COLUMNS.map((column) => (
                                    <TableCell key={column}>{column}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {topCustomers.map((customer) => (
                                <TableRow key={customer.email}>
                                    <TableCell>
                                        {customer.customer_name}
                                    </TableCell>

                                    <TableCell>{customer.email}</TableCell>

                                    <TableCell>
                                        {customer.order_count}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                );
        }
    };

    return (
        <StyledPage>
            <HeaderSection spacing={5}>
                <Typography variant="h4">Restaurant Statistics</Typography>

                <FormControl fullWidth>
                    <InputLabel>Restaurant</InputLabel>

                    <Select
                        label="Restaurant"
                        value={selectedRestaurantId}
                        onChange={(event) => {
                            setSelectedRestaurantId(Number(event.target.value));
                        }}
                    >
                        {restaurants.map((restaurant) => (
                            <MenuItem key={restaurant.id} value={restaurant.id}>
                                {restaurant.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </HeaderSection>

            {!restaurantId && (
                <Alert severity="info">Please select a restaurant.</Alert>
            )}

            {restaurantId &&
                STATISTICS_SECTIONS.map((section) => {
                    const loading =
                        section.key === 'orders'
                            ? ordersLoading
                            : section.key === 'menu'
                              ? menuLoading
                              : customersLoading;

                    const error =
                        section.key === 'orders'
                            ? ordersError
                            : section.key === 'menu'
                              ? menuError
                              : customersError;

                    return (
                        <Section key={section.key}>
                            <Typography variant="h6">
                                {section.title}
                            </Typography>

                            {loading && <Typography>Loading...</Typography>}

                            {error && (
                                <Alert severity="error">
                                    Failed to load {section.title}.
                                </Alert>
                            )}

                            {!loading && !error && renderTable(section.key)}
                        </Section>
                    );
                })}
        </StyledPage>
    );
};
