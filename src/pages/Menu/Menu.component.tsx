import { useState } from 'react';

import { useParams } from 'react-router-dom';

import { Button, Typography } from '@mui/material';

import { useGetMenuItemsQuery, useGetRestaurantsQuery } from '@api';
import { CustomDialog, DialogMode, MenuCard } from '@components';
import { CardSection } from '@containers';
import { useAppSelector } from '@hooks';
import type { MenuItem } from '@types';

import { MenuHeader, StyledPage } from './Menu.styles';

export const Menu = () => {
    const { restaurantId } = useParams();

    const restaurantIdNumber = Number(restaurantId);

    const {
        data: menuItems = [],
        isLoading,
        error,
    } = useGetMenuItemsQuery(restaurantId ? restaurantIdNumber : undefined);

    const availableMenuItems = menuItems.filter((item) => item.quantity > 0);

    const user = useAppSelector((state) => state.auth.user);

    const { data: restaurants = [] } = useGetRestaurantsQuery();

    const currentRestaurant = restaurants.find(
        (restaurant) => restaurant.id === restaurantIdNumber,
    );

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [dialogMode, setDialogMode] = useState<DialogMode>('add');

    const [selectedItem, setSelectedItem] = useState<MenuItem>();

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
                                    onClick={() => {
                                        setDialogMode('add');
                                        setSelectedItem(undefined);
                                        setIsDialogOpen(true);
                                    }}
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
                    renderCard={(menuItem) => (
                        <MenuCard
                            key={menuItem.id}
                            item={menuItem}
                            isRestaurantMenu={isRestaurantMenu}
                            isOwner={isOwnerOfRestaurant}
                            restaurantId={restaurantIdNumber}
                            onEdit={(selectedMenuItem) => {
                                setDialogMode('edit');
                                setSelectedItem(selectedMenuItem);
                                setIsDialogOpen(true);
                            }}
                            onDelete={(selectedMenuItem) => {
                                setDialogMode('delete');
                                setSelectedItem(selectedMenuItem);
                                setIsDialogOpen(true);
                            }}
                        />
                    )}
                />
                <CustomDialog
                    open={isDialogOpen}
                    mode={dialogMode}
                    restaurantId={restaurantIdNumber}
                    item={selectedItem}
                    title={
                        dialogMode === 'delete'
                            ? 'Delete Menu Item'
                            : dialogMode === 'edit'
                              ? 'Edit Menu Item'
                              : 'Add Menu Item'
                    }
                    confirmButtonText={
                        dialogMode === 'delete'
                            ? 'Delete'
                            : dialogMode === 'edit'
                              ? 'Save'
                              : 'Add'
                    }
                    onClose={() => {
                        setDialogMode('add');
                        setSelectedItem(undefined);
                        setIsDialogOpen(false);
                    }}
                />
            </StyledPage>
        </>
    );
};
