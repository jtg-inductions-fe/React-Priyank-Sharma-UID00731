import type { ReactNode } from 'react';

export type CustomCardProps = {
    image?: string;
    imageAlt?: string;
    title: ReactNode;
    subtitle?: ReactNode;
    actions?: ReactNode;
};
