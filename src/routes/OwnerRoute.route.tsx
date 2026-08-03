import { Navigate, Outlet } from 'react-router-dom';
import { useGetRestaurantsQuery } from 'services';

import { APP_ROUTES } from '@constants';
import { useAppSelector } from '@hooks';

export const OwnerRoute = () => {
    const user = useAppSelector((state) => state.auth.user);

    const { data: restaurants = [], isLoading } = useGetRestaurantsQuery();

    if (!user) {
        return <Navigate to={APP_ROUTES.LOGIN} replace />;
    }

    if (isLoading) {
        return null;
    }

    const isOwner = restaurants.some(
        (restaurant) => restaurant.owner_id === user.id,
    );

    if (!isOwner) {
        return <Navigate to={APP_ROUTES.HOME} replace />;
    }

    return <Outlet />;
};
