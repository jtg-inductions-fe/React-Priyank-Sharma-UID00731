import type { CartState, User } from '@types';

const TOKEN_KEY = 'token';
const USER_KEY = 'user';
const COOKIE_MAX_AGE = Number(import.meta.env.VITE_COOKIE_MAX_AGE);
const CART_KEY = 'cart';

/**
 * Stores the authentication token in browser cookies.
 *
 * @param token - JWT authentication token.
 */
export const setToken = (token: string) => {
    document.cookie = `${TOKEN_KEY}=${encodeURIComponent(
        token,
    )}; Path=/; Max-Age=${COOKIE_MAX_AGE}`;
};

/**
 * Retrieves the authentication token from browser cookies.
 *
 * @returns The JWT token if found, otherwise null.
 */
export const getToken = () => {
    const cookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${TOKEN_KEY}=`));

    return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
};

/**
 * Removes the authentication token from browser cookies.
 */
export const removeToken = () => {
    document.cookie = `${TOKEN_KEY}=; Path=/; Max-Age=0`;
};

/**
 * Stores the authenticated user in browser cookies.
 *
 * @param user - User information.
 */
export const setUser = (user: unknown) => {
    document.cookie = `${USER_KEY}=${encodeURIComponent(
        JSON.stringify(user),
    )}; Path=/; Max-Age=${COOKIE_MAX_AGE}`;
};

/**
 * Retrieves the authenticated user from browser cookies.
 *
 * @returns Parsed user object if available, otherwise null.
 */
export const getUser = (): User | null => {
    const cookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${USER_KEY}=`));

    return cookie
        ? (JSON.parse(decodeURIComponent(cookie.split('=')[1])) as User)
        : null;
};

/**
 * Removes the authenticated user from browser cookies.
 */
export const removeUser = () => {
    document.cookie = `${USER_KEY}=; Path=/; Max-Age=0`;
};

/**
 * Stores the cart state in localStorage.
 *
 * @param cart - Current cart state.
 */
export const setCart = (cart: CartState) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

/**
 * Retrieves the cart state from localStorage.
 *
 * @returns Parsed cart state if available, otherwise null.
 */
export const getCart = (): CartState | null => {
    const raw = localStorage.getItem(CART_KEY);

    return raw ? (JSON.parse(raw) as CartState) : null;
};

/**
 * Removes the cart state from localStorage.
 */
export const removeCart = () => {
    localStorage.removeItem(CART_KEY);
};
