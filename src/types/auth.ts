export enum RoleType {
    ADMIN = 1,
    NORMAL_USER = 2,
}

export interface User {
    id: number;
    email: string;
    name: string;
    city: string;
    state: string;
    zipcode: string;
    balance: number;
    role: RoleType;
}

export interface LoginPayload {
    user: User;
    token: string;
}
