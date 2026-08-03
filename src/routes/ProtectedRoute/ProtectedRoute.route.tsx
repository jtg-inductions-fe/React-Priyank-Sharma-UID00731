import { Navigate, Outlet } from 'react-router-dom';

import { APP_ROUTES } from '@constants';
import { useAppSelector } from '@hooks';

export const ProtectedRoute = () => {
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated,
    );

    if (!isAuthenticated) {
        return <Navigate to={APP_ROUTES.LOGIN} replace />;
    }

    return <Outlet />;
};
