import { Outlet } from 'react-router-dom';

import { Footer, Header } from '@containers';

export const MainLayout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);
