import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import {
    useDeleteUserMutation,
    useGetUserQuery,
    useUpdateUserMutation,
} from 'services';
import { logout } from 'slices';

import { CircularProgress, TextField, Typography } from '@mui/material';

import { CustomDialog } from '@components';
import { APP_ROUTES } from '@constants';
import { useAppDispatch, useAppSelector } from '@hooks';

import { getProfileDetails, profileFields } from './Profile.constants';
import {
    ActionButton,
    ActionContainer,
    DetailLabel,
    DetailRow,
    DetailsContainer,
    DetailValue,
    Divider,
    PageContainer,
    PageTitle,
    ProfileAvatar,
    ProfileCard,
    UserInfo,
} from './Profile.styles';
import type { ProfileDialogMode } from './Profile.types';

export const Profile = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        state: '',
        zipcode: '',
        balance: '',
    });

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const userId = useAppSelector((state) => state.auth.user?.id);

    const {
        data: user,
        isLoading,
        isError,
    } = useGetUserQuery(userId as number, {
        skip: !userId,
    });

    const [dialogMode, setDialogMode] = useState<ProfileDialogMode | null>(
        null,
    );

    const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

    const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

    const [dialogError, setDialogError] = useState('');

    useEffect(() => {
        if (!user || dialogMode !== 'edit') {
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

        setDialogError('');
    }, [user, dialogMode]);

    if (isLoading) {
        return (
            <PageContainer>
                <CircularProgress />
            </PageContainer>
        );
    }

    if (isError || !user) {
        return (
            <PageContainer>
                <Typography variant="h6">Unable to load profile.</Typography>
            </PageContainer>
        );
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleConfirm = async () => {
        try {
            if (dialogMode === 'delete') {
                await deleteUser(user.id).unwrap();

                dispatch(logout());

                void navigate(APP_ROUTES.LOGIN);

                return;
            }

            await updateUser({
                userId: user.id,
                body: {
                    ...formData,
                    balance: Number(formData.balance),
                },
            }).unwrap();

            setDialogMode(null);
        } catch {
            setDialogError('Something went wrong.');
        }
    };

    const profileDetails = [
        ...getProfileDetails(user),
        {
            label: 'Role',
            value:
                user.restaurants.length > 0
                    ? 'Restaurant Owner'
                    : 'Normal User',
        },
    ];

    return (
        <PageContainer>
            <PageTitle variant="h4">Profile</PageTitle>

            <ProfileCard elevation={3}>
                <UserInfo>
                    <ProfileAvatar>
                        {user.name.charAt(0).toUpperCase()}
                    </ProfileAvatar>

                    <Typography variant="h5">{user.name}</Typography>

                    <Typography color="text.secondary">{user.email}</Typography>
                </UserInfo>

                <Divider />

                <DetailsContainer>
                    {profileDetails.map((detail) => (
                        <DetailRow key={detail.label}>
                            <DetailLabel>{detail.label}</DetailLabel>

                            <DetailValue>{detail.value}</DetailValue>
                        </DetailRow>
                    ))}
                </DetailsContainer>

                <Divider />

                <ActionContainer>
                    <ActionButton
                        variant="contained"
                        onClick={() => setDialogMode('edit')}
                    >
                        Update Profile
                    </ActionButton>

                    <ActionButton
                        variant="outlined"
                        color="error"
                        onClick={() => setDialogMode('delete')}
                    >
                        Delete Account
                    </ActionButton>
                </ActionContainer>
            </ProfileCard>
            <CustomDialog
                open={Boolean(dialogMode)}
                title={
                    dialogMode === 'delete'
                        ? 'Delete Account'
                        : 'Update Profile'
                }
                confirmButtonText={
                    dialogMode === 'delete' ? 'Delete' : 'Update'
                }
                confirmColor={dialogMode === 'delete' ? 'error' : 'primary'}
                loading={isUpdating || isDeleting}
                onClose={() => {
                    setDialogMode(null);
                    setDialogError('');
                }}
                onConfirm={() => {
                    void handleConfirm();
                }}
            >
                {dialogMode === 'delete' && (
                    <Typography>
                        Are you sure you want to delete your account?
                    </Typography>
                )}

                {dialogMode === 'edit' && (
                    <>
                        {dialogError && (
                            <Typography color="error">{dialogError}</Typography>
                        )}

                        {profileFields.map((field) => (
                            <TextField
                                key={field.name}
                                label={field.label}
                                name={field.name}
                                type={field.type}
                                value={formData[field.name]}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                        ))}
                    </>
                )}
            </CustomDialog>
        </PageContainer>
    );
};
