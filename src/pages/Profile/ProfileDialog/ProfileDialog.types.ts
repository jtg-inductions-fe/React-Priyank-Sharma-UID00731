import type { User } from '@types';

import type { ProfileDialogMode } from '../Profile.types';

export type ProfileDialogProps = {
    open: boolean;
    mode: ProfileDialogMode;
    user: User;
    onClose: () => void;
};
