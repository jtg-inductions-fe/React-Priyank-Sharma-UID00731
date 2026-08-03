export const menuFields = [
    {
        label: 'Name',
        name: 'name',
        type: 'text',
        multiline: false,
    },
    {
        label: 'Description',
        name: 'description',
        type: 'text',
        multiline: true,
    },
    {
        label: 'Price',
        name: 'price',
        type: 'number',
        multiline: false,
    },
    {
        label: 'Quantity',
        name: 'quantity',
        type: 'number',
        multiline: false,
    },
] as const;
