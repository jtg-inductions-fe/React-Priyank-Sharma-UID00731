import type { User } from '@types';

export const getProfileDetails = (user: User) => [
    {
        label: 'Name',
        value: user.name,
    },
    {
        label: 'City',
        value: user.city,
    },
    {
        label: 'State',
        value: user.state,
    },
    {
        label: 'Zip Code',
        value: user.zipcode,
    },
    {
        label: 'Available Balance',
        value: user.balance,
    },
];

export const profileFields = [
    { label: 'Name', name: 'name', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'City', name: 'city', type: 'text' },
    { label: 'State', name: 'state', type: 'text' },
    { label: 'Zip Code', name: 'zipcode', type: 'text' },
    { label: 'Balance', name: 'balance', type: 'number' },
] as const;
