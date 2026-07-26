import { createBrowserRouter } from 'react-router-dom';

import { APP_ROUTES } from '@constants';
import { MainLayout } from '@layouts';
import { Home, Login, NotFound, Register, Restaurants } from '@pages';

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: APP_ROUTES.HOME,
                element: <Home />,
            },
            {
                path: APP_ROUTES.RESTAURANTS,
                element: <Restaurants />,
            },
        ],
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
