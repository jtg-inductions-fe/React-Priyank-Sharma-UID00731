import type { ReactNode } from 'react';

export interface CustomCardProps {
    image?: string;
    imageAlt?: string;
    title: ReactNode;
    subtitle?: ReactNode;
    actions?: ReactNode;
}
