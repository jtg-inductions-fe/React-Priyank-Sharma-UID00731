import { RouterProvider } from 'react-router-dom';

import { router } from '@routes';

/**
 * Root application component.
 *
 * @returns Application router.
 */
export const App = () => <RouterProvider router={router} />;
