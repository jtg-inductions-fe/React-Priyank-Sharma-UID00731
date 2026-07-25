import { createBrowserRouter } from 'react-router-dom';

import { APP_ROUTES } from '@constants';
import { Home, Login, NotFound, Register } from '@pages';

/**
 * Application routes.
 */
export const router = createBrowserRouter([
    {
        path: APP_ROUTES.HOME,
        element: <Home />,
    },
    {
        path: APP_ROUTES.LOGIN,
        element: <Login />,
    },
    {
        path: APP_ROUTES.REGISTER,
        element: <Register />,
    },
    {
        path: APP_ROUTES.NOT_FOUND,
        element: <NotFound />,
    },
]);
