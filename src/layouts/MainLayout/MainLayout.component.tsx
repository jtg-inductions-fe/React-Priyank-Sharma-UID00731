import { Outlet } from 'react-router-dom';

import { Footer, Header } from '@components';

export const MainLayout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);
