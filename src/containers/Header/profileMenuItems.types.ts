import type { Restaurant } from '@types';

export type GetProfileMenuItemsProps = {
    restaurants?: Restaurant[];
    onLogout: () => void;
};
