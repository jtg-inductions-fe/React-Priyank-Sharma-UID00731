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
};

export type LoginPayload = {
    user: User;
    token: string;
};
