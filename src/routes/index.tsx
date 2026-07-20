import { Route, Routes } from 'react-router-dom';

import { APP_ROUTES } from '@constants';

import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';

const AppRoutes = () => (
    <Routes>
        <Route path={APP_ROUTES.HOME} element={<Home />} />
        <Route path={APP_ROUTES.NOT_FOUND} element={<NotFound />} />
    </Routes>
);

export default AppRoutes;
