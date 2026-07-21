import { createBrowserRouter } from 'react-router-dom';

import { APP_ROUTES } from '@constants';
import { Home, NotFound } from '@pages';

export const router = createBrowserRouter([
    {
        path: APP_ROUTES.HOME,
        element: <Home />,
    },
    {
        path: APP_ROUTES.NOT_FOUND,
        element: <NotFound />,
    },
]);
