import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

/**
 * Extracts a readable error message from an RTK Query error.
 *
 * @param error - RTK Query error.
 * @returns Error message to display to the user.
 */
export const getErrorMessage = (error: unknown): string => {
    const apiError = error as FetchBaseQueryError;

    if (
        'data' in apiError &&
        typeof apiError.data === 'object' &&
        apiError.data !== null
    ) {
        const data = apiError.data as {
            detail?: string | unknown[];
        };

        if (typeof data.detail === 'string') {
            return data.detail;
        }

        if (Array.isArray(data.detail)) {
            return 'Please check the entered information.';
        }
    }

    return 'Something went wrong. Please try again.';
};
