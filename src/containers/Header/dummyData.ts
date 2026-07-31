import { ROLE } from '@types';

export const normalUser = {
    user: {
        id: 1,
        email: 'priyank@example.com',
        name: 'Priyank',
        city: '',
        state: '',
        zipcode: '',
        balance: 0,
        role: ROLE.NORMAL_USER,
    },
    token: 'dummy-token',
};

export const ownerUser = {
    user: {
        id: 2,
        email: 'owner@example.com',
        name: 'Restaurant Owner',
        city: '',
        state: '',
        zipcode: '',
        balance: 0,
        role: ROLE.ADMIN,
    },
    token: 'dummy-token',
};
