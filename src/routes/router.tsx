import { createBrowserRouter } from 'react-router-dom';

import { APP_ROUTES } from '@constants';
import { MainLayout } from '@layouts';
import {
    Home,
    Login,
    Menu,
    MyRestaurant,
    NotFound,
    Profile,
    Register,
    Restaurants,
    Statistics,
} from '@pages';

import { OwnerRoute } from './OwnerRoute.route';
import { ProtectedRoute } from './ProtectedRoute';

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
            {
                path: APP_ROUTES.MENU,
                element: <Menu />,
            },
            {
                path: APP_ROUTES.RESTAURANT_MENU,
                element: <Menu />,
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: APP_ROUTES.PROFILE,
                        element: <Profile />,
                    },
                    {
                        element: <OwnerRoute />,
                        children: [
                            {
                                path: APP_ROUTES.MY_RESTAURANTS,
                                element: <MyRestaurant />,
                            },
                            {
                                path: APP_ROUTES.STATISTICS,
                                element: <Statistics />,
                            },
                        ],
                    },
                ],
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
