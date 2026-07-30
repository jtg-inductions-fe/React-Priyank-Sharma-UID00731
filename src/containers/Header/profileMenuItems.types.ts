import { RoleType } from '@types';

export type GetProfileMenuItemsProps = {
    role?: RoleType;
    onLogout: () => void;
};
