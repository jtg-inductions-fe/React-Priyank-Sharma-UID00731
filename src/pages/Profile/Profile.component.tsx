import { useState } from 'react';

import { CircularProgress, Typography } from '@mui/material';

import { useGetUserQuery } from '@api';
import { useAppSelector } from '@hooks';

import { getProfileDetails } from './Profile.constants';
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
import { ProfileDialog } from './ProfileDialog';

export const Profile = () => {
    const [dialogMode, setDialogMode] = useState<ProfileDialogMode | null>(
        null,
    );

    const userId = useAppSelector((state) => state.auth.user?.id);

    const {
        data: user,
        isLoading,
        isError,
    } = useGetUserQuery(userId as number, {
        skip: !userId,
    });

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
            {dialogMode && (
                <ProfileDialog
                    open={Boolean(dialogMode)}
                    mode={dialogMode}
                    user={user}
                    onClose={() => setDialogMode(null)}
                />
            )}
        </PageContainer>
    );
};
