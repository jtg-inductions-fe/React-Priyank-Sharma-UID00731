import { useState } from 'react';

import type { ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLazyGetUserQuery, useLoginMutation } from 'services';

import { Button, Typography } from '@mui/material';

import { APP_ROUTES } from '@constants';
import { useAppDispatch } from '@hooks';
import { loginSuccess } from '@slices';
import type { LoginRequest } from '@types';
import { getErrorMessage } from '@utils';
import { setToken } from '@utils';

import {
    StyledForm,
    StyledFormContainer,
    StyledTextField,
} from './LoginForm.styles';

export const LoginForm = () => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const [login, { isLoading }] = useLoginMutation();

    const [getUser] = useLazyGetUserQuery();

    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState<LoginRequest>({
        email: '',
        password: '',
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setErrorMessage('');
        setFormData((previousState) => ({
            ...previousState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setErrorMessage('');

        try {
            const response = await login(formData).unwrap();

            setToken(response.token);

            const user = await getUser(response.user.id).unwrap();

            dispatch(
                loginSuccess({
                    token: response.token,
                    user,
                }),
            );

            void navigate(APP_ROUTES.HOME);
        } catch (error) {
            setErrorMessage(getErrorMessage(error));
        }
    };

    return (
        <StyledFormContainer>
            <Typography variant="h4">Welcome Back</Typography>

            <Typography variant="body1">
                Login to continue to EatPlex
            </Typography>

            <StyledForm
                onSubmit={(event) => {
                    void handleSubmit(event);
                }}
            >
                <StyledTextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                />

                <StyledTextField
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    fullWidth
                    required
                />

                {errorMessage && (
                    <Typography color="error">{errorMessage}</Typography>
                )}

                <Button type="submit" variant="contained" disabled={isLoading}>
                    {isLoading ? 'Logging In...' : 'Login'}
                </Button>
            </StyledForm>
        </StyledFormContainer>
    );
};
