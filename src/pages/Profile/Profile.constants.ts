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
