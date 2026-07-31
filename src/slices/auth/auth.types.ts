import { User } from '@types';

/**
 * Represents the authentication state stored in Redux.
 */
export type AuthState = {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
};
