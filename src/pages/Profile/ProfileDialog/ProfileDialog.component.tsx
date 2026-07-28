import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Typography,
} from '@mui/material';

import { useDeleteUserMutation, useUpdateUserMutation } from '@api';
import { APP_ROUTES } from '@constants';
import { logout } from '@features/auth';
import { useAppDispatch } from '@hooks';
import { getErrorMessage } from '@utils';

import { ActionButton, FormContainer } from './ProfileDialog.styles';
import type { ProfileDialogProps } from './ProfileDialog.types';

export const ProfileDialog = ({
    open,
    mode,
    user,
    onClose,
}: ProfileDialogProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

    const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        state: '',
        zipcode: '',
        balance: '',
    });

    const [error, setError] = useState('');

    const isLoading = isUpdating || isDeleting;

    useEffect(() => {
        if (!user) {
            return;
        }

        setFormData({
            name: user.name,
            email: user.email,
            city: user.city,
            state: user.state,
            zipcode: user.zipcode,
            balance: String(user.balance),
        });

        setError('');
    }, [user, open]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validate = () => {
        if (formData.name.trim().length < 2) {
            return 'Name must be at least 2 characters.';
        }

        if (!formData.email.trim()) {
            return 'Email is required.';
        }

        if (!formData.city.trim()) {
            return 'City is required.';
        }

        if (!formData.state.trim()) {
            return 'State is required.';
        }

        if (!formData.zipcode.trim()) {
            return 'Zip Code is required.';
        }

        return '';
    };

    const handleConfirm = async () => {
        try {
            if (mode === 'delete') {
                await deleteUser(user.id).unwrap();

                dispatch(logout());

                void navigate(APP_ROUTES.LOGIN);

                return;
            }

            const validationError = validate();

            if (validationError) {
                setError(validationError);
                return;
            }

            await updateUser({
                userId: user.id,
                body: {
                    ...formData,
                    balance: Number(formData.balance),
                },
            }).unwrap();

            onClose();
        } catch (err) {
            setError(getErrorMessage(err));
        }
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>
                {mode === 'edit' ? 'Update Profile' : 'Delete Account'}
            </DialogTitle>

            <DialogContent>
                {mode === 'delete' ? (
                    <Typography>
                        Are you sure you want to delete your account?
                    </Typography>
                ) : (
                    <FormContainer>
                        {error && (
                            <Typography color="error">{error}</Typography>
                        )}

                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                        />

                        <TextField
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                        />

                        <TextField
                            label="Balance"
                            name="balance"
                            value={formData.balance}
                            onChange={handleChange}
                            type="number"
                            fullWidth
                        />

                        <TextField
                            label="City"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            fullWidth
                        />

                        <TextField
                            label="State"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            fullWidth
                        />

                        <TextField
                            label="Zip Code"
                            name="zipcode"
                            value={formData.zipcode}
                            onChange={handleChange}
                            fullWidth
                        />
                    </FormContainer>
                )}
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>

                <ActionButton
                    variant="contained"
                    color={mode === 'delete' ? 'error' : 'primary'}
                    disabled={isLoading}
                    onClick={() => {
                        void handleConfirm();
                    }}
                >
                    {mode === 'edit' ? 'Update' : 'Delete'}
                </ActionButton>
            </DialogActions>
        </Dialog>
    );
};
