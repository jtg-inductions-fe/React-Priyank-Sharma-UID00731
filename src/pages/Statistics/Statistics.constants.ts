export const STATISTICS_SECTIONS = [
    {
        key: 'orders',
        title: 'Orders',
    },
    {
        key: 'menu',
        title: 'Most Ordered Menu Items',
    },
    {
        key: 'customers',
        title: 'Top Customers',
    },
] as const;

export const ORDER_COLUMNS = ['Order ID', 'Date', 'Total'] as const;
