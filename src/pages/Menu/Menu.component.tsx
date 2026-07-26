import { useState } from 'react';

import { useParams } from 'react-router-dom';

import { Button, Typography } from '@mui/material';

import { useGetMenuItemsQuery, useGetRestaurantsQuery } from '@api';
import { AddMenuItemDialog, CardSection, MenuCard } from '@components';
import { useAppSelector } from '@hooks';

import { MenuHeader, StyledPage } from './Menu.styles';

export const Menu = () => {
    const { restaurantId } = useParams();

    const {
        data: menuItems = [],
        isLoading,
        error,
    } = useGetMenuItemsQuery(restaurantId ? Number(restaurantId) : undefined);

    const availableMenuItems = menuItems.filter((item) => item.quantity > 0);

    const user = useAppSelector((state) => state.auth.user);

    const { data: restaurants = [] } = useGetRestaurantsQuery();

    const currentRestaurant = restaurants.find(
        (restaurant) => restaurant.id === Number(restaurantId),
    );

    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

    const isRestaurantMenu = Boolean(restaurantId);

    const isOwnerOfRestaurant = currentRestaurant?.owner_id === user?.id;

    return (
        <>
            <StyledPage>
                <CardSection
                    title={
                        <MenuHeader>
                            <Typography variant="h5">
                                {restaurantId
                                    ? 'Restaurant Menu'
                                    : 'All Menu Items'}
                            </Typography>

                            {isRestaurantMenu && isOwnerOfRestaurant && (
                                <Button
                                    variant="contained"
                                    onClick={() => setIsAddDialogOpen(true)}
                                >
                                    Add Menu Item
                                </Button>
                            )}
                        </MenuHeader>
                    }
                    items={availableMenuItems}
                    isLoading={isLoading}
                    error={error}
                    emptyMessage="No menu items found."
                    loadingMessage="Loading menu..."
                    errorMessage="Failed to load menu."
                    renderCard={(item) => (
                        <MenuCard
                            key={item.id}
                            item={item}
                            isRestaurantMenu={isRestaurantMenu}
                            isOwner={isOwnerOfRestaurant}
                            restaurantId={Number(restaurantId)}
                        />
                    )}
                />
                <AddMenuItemDialog
                    open={isAddDialogOpen}
                    restaurantId={Number(restaurantId)}
                    onClose={() => setIsAddDialogOpen(false)}
                />
            </StyledPage>
        </>
    );
};
