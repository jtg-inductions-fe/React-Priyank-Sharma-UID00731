export const REGISTER_FIELDS = [
    {
        label: 'Name',
        name: 'name',
        type: 'text',
    },
    {
        label: 'Email',
        name: 'email',
        type: 'email',
    },
    {
        label: 'Password',
        name: 'password',
        type: 'password',
    },
    {
        label: 'City',
        name: 'city',
        type: 'text',
    },
    {
        label: 'State',
        name: 'state',
        type: 'text',
    },
    {
        label: 'Zipcode',
        name: 'zipcode',
        type: 'text',
    },
    {
        label: 'Balance',
        name: 'balance',
        type: 'number',
        min: 0,
    },
] as const;
