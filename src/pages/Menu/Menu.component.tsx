import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { Alert, Button, TextField, Typography } from '@mui/material';

import {
    useCreateMenuItemMutation,
    useDeleteMenuItemMutation,
    useGetMenuItemsQuery,
    useGetRestaurantsQuery,
    useUpdateMenuItemMutation,
} from '@api';
import type { DialogMode } from '@components';
import { CustomDialog, MenuCard } from '@components';
import { CardSection } from '@containers';
import { addItem, decrementItem, incrementItem } from '@features/cart';
import { useAppDispatch, useAppSelector } from '@hooks';
import type { MenuItem } from '@types';

import { menuFields } from './Menu.constants';
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

    const [createMenuItem, { isLoading: isCreating }] =
        useCreateMenuItemMutation();

    const [updateMenuItem, { isLoading: isUpdating }] =
        useUpdateMenuItemMutation();

    const [deleteMenuItem, { isLoading: isDeleting }] =
        useDeleteMenuItemMutation();

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [dialogMode, setDialogMode] = useState<DialogMode>('add');

    const [selectedItem, setSelectedItem] = useState<MenuItem>();

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        quantity: '',
    });

    const { name, description, price, quantity } = formData;

    const [dialogError, setDialogError] = useState('');

    const cart = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();

    const [cartError, setCartError] = useState('');

    const handleAddToCart = (menuItem: MenuItem) => {
        if (
            cart.restaurantId !== null &&
            cart.restaurantId !== restaurantIdNumber
        ) {
            setCartError(
                'Your cart has items from another restaurant. Please clear your cart before adding items from here.',
            );

            return;
        }

        setCartError('');
        dispatch(addItem(menuItem));
    };

    const handleIncrement = (menuItem: MenuItem) => {
        dispatch(incrementItem(menuItem.id));
    };

    const handleDecrement = (menuItem: MenuItem) => {
        dispatch(decrementItem(menuItem.id));
    };

    useEffect(() => {
        setFormData({
            name: selectedItem?.name ?? '',
            description: selectedItem?.description ?? '',
            price: selectedItem ? String(selectedItem.price) : '',
            quantity: selectedItem ? String(selectedItem.quantity) : '',
        });

        setDialogError('');
    }, [selectedItem, isDialogOpen]);

    const validateForm = () => {
        if (name.trim().length < 2) {
            return 'Name must be at least 2 characters.';
        }

        if (description.trim().length < 5) {
            return 'Description must be at least 5 characters.';
        }

        if (price === '' || Number(price) < 0) {
            return 'Price must be 0 or greater.';
        }

        if (quantity === '' || Number(quantity) < 0) {
            return 'Quantity must be 0 or greater.';
        }

        return '';
    };

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name: fieldName, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [fieldName]: value,
        }));
    };

    const handleNumberKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        if (['e', 'E', '+', '-'].includes(event.key)) {
            event.preventDefault();
        }
    };

    const handleConfirm = async () => {
        try {
            if (dialogMode !== 'delete') {
                const validationError = validateForm();

                if (validationError) {
                    setDialogError(validationError);
                    return;
                }

                setDialogError('');
            }

            switch (dialogMode) {
                case 'add':
                    await createMenuItem({
                        restaurantId: restaurantIdNumber,
                        data: {
                            name,
                            description,
                            price: Number(price),
                            quantity: Number(quantity),
                        },
                    }).unwrap();

                    break;

                case 'edit':
                    await updateMenuItem({
                        restaurantId: restaurantIdNumber,
                        itemId: selectedItem!.id,
                        data: {
                            name,
                            description,
                            price: Number(price),
                            quantity: Number(quantity),
                        },
                    }).unwrap();

                    break;

                case 'delete':
                    await deleteMenuItem({
                        restaurantId: restaurantIdNumber,
                        itemId: selectedItem!.id,
                    }).unwrap();

                    break;
            }

            setIsDialogOpen(false);
            setSelectedItem(undefined);
            setDialogMode('add');
        } catch {
            setDialogError('Something went wrong.');
        }
    };

    const isRestaurantMenu = Boolean(restaurantId);

    const isOwnerOfRestaurant = currentRestaurant?.owner_id === user?.id;

    return (
        <>
            <StyledPage>
                <CardSection
                    title={
                        <>
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

                            {cartError && (
                                <Alert
                                    severity="error"
                                    onClose={() => setCartError('')}
                                >
                                    {cartError}
                                </Alert>
                            )}
                        </>
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
                            cartQuantity={
                                cart.items.find(
                                    (cartItem) =>
                                        cartItem.menu_item.id === menuItem.id,
                                )?.quantity ?? 0
                            }
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
                            onAddToCart={handleAddToCart}
                            onIncrement={handleIncrement}
                            onDecrement={handleDecrement}
                        />
                    )}
                />
                <CustomDialog
                    open={isDialogOpen}
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
                    confirmColor={dialogMode === 'delete' ? 'error' : 'primary'}
                    loading={isCreating || isUpdating || isDeleting}
                    onClose={() => {
                        setDialogMode('add');
                        setIsDialogOpen(false);
                        setSelectedItem(undefined);
                    }}
                    onConfirm={() => {
                        void handleConfirm();
                    }}
                >
                    {dialogMode === 'delete' ? (
                        <Typography>
                            Are you sure you want to delete {selectedItem?.name}
                            ?
                        </Typography>
                    ) : (
                        <>
                            {dialogError && (
                                <Typography color="error">
                                    {dialogError}
                                </Typography>
                            )}

                            {menuFields.map((field) => (
                                <TextField
                                    key={field.name}
                                    label={field.label}
                                    name={field.name}
                                    type={field.type}
                                    value={formData[field.name]}
                                    multiline={field.multiline}
                                    fullWidth
                                    margin="normal"
                                    onChange={(event) => {
                                        if (field.type === 'number') {
                                            const value = event.target.value;

                                            if (
                                                value === '' ||
                                                Number(value) >= 0
                                            ) {
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    [field.name]: value,
                                                }));
                                            }

                                            return;
                                        }

                                        handleChange(event);
                                    }}
                                    onKeyDown={
                                        field.type === 'number'
                                            ? handleNumberKeyDown
                                            : undefined
                                    }
                                    slotProps={
                                        field.type === 'number'
                                            ? {
                                                  htmlInput: {
                                                      min: 0,
                                                  },
                                              }
                                            : undefined
                                    }
                                />
                            ))}
                        </>
                    )}
                </CustomDialog>
            </StyledPage>
        </>
    );
};
