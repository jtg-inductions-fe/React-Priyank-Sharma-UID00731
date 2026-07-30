/**
 * Application route paths.
 */
export const APP_ROUTES = {
    HOME: '/',
    RESTAURANTS: '/restaurants',
    MENU: '/menu',
    RESTAURANT_MENU: '/menu/:restaurantId',
    LOGIN: '/login',
    CART: '/cart',
    REGISTER: '/register',
    DASHBOARD: '/dashboard',
    STATISTICS: '/my-restaurants/statistics',
    PROFILE: '/profile',
    MY_RESTAURANTS: '/my-restaurants',
    NOT_FOUND: '*',
} as const;
