import type { ReactNode } from 'react';

import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export type CardSectionProps<T> = {
    title?: ReactNode;
    items: T[];
    isLoading: boolean;
    error?: FetchBaseQueryError | SerializedError;
    emptyMessage: string;
    loadingMessage?: string;
    errorMessage?: string;
    renderCard: (item: T) => ReactNode;
};
