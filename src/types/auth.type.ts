import type { Restaurant } from './restaurant.type';

export const ROLE = {
    ADMIN: 1,
    NORMAL_USER: 2,
} as const;

export type RoleType = (typeof ROLE)[keyof typeof ROLE];

export type User = {
    id: number;
    email: string;
    name: string;
    city: string;
    state: string;
    zipcode: string;
    balance: number;
    role: RoleType;
    restaurants: Restaurant[];
};

export type LoginRequest = {
    email: string;
    password: string;
};

export type LoginResponse = {
    token: string;
    user: User;
};

export type RegisterRequest = {
    email: string;
    password: string;
    name: string;
    city: string;
    state: string;
    zipcode: string;
    balance: number;
    role: RoleType;
    admin_key?: string;
};
