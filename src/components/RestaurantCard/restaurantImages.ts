import Restaurant1 from '@assets/images/restaurant-1.png';
import Restaurant2 from '@assets/images/restaurant-2.png';
import Restaurant3 from '@assets/images/restaurant-3.png';
import Restaurant4 from '@assets/images/restaurant-4.png';

export const RESTAURANT_IMAGES = [
    Restaurant1,
    Restaurant2,
    Restaurant3,
    Restaurant4,
];

export const getRestaurantImage = (id: number): string =>
    RESTAURANT_IMAGES[(id - 1) % RESTAURANT_IMAGES.length];
