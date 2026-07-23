import { useDispatch } from 'react-redux';

import type { AppDispatch } from '@store';

/**
 * Typed Redux dispatch hook.
 *
 * @returns Application dispatch function.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
