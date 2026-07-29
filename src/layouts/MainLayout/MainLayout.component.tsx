import { Outlet } from 'react-router-dom';

import { Header } from '@components';
import { Footer } from '@containers';

export const MainLayout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);
