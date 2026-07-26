import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { Restaurant } from '@types';

export interface RestaurantSectionProps {
    title?: string;
    restaurants: Restaurant[];
    isLoading: boolean;
    error?: FetchBaseQueryError | SerializedError;
}
