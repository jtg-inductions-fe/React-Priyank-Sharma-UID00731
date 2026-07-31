import { useState } from 'react';

import type { ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from 'services';

import { Button, Typography } from '@mui/material';

import { APP_ROUTES } from '@constants';
import type { RegisterRequest } from '@types';
import { ROLE } from '@types';
import { getErrorMessage } from '@utils';

import { REGISTER_FIELDS } from './RegisterForm.constants';
import {
    StyledForm,
    StyledFormContainer,
    StyledTextField,
} from './RegisterForm.styles';

export const RegisterForm = () => {
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('');
    const [register, { isLoading }] = useRegisterMutation();

    const [formData, setFormData] = useState<RegisterRequest>({
        name: '',
        email: '',
        password: '',
        city: '',
        state: '',
        zipcode: '',
        balance: 0,
        role: ROLE.NORMAL_USER,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setErrorMessage('');
        setFormData((previousState) => ({
            ...previousState,
            [name]: name === 'balance' && value !== '' ? Number(value) : value,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setErrorMessage('');

        try {
            await register(formData).unwrap();

            void navigate(APP_ROUTES.LOGIN);
        } catch (error) {
            setErrorMessage(getErrorMessage(error));
        }
    };

    return (
        <StyledFormContainer spacing={2}>
            <Typography variant="h4">Create Account</Typography>

            <Typography variant="body1">
                Register to continue to EatPlex
            </Typography>

            <StyledForm
                onSubmit={(event) => {
                    void handleSubmit(event);
                }}
            >
                {REGISTER_FIELDS.map((field) => (
                    <StyledTextField
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required
                        slotProps={{
                            htmlInput: {
                                min: field.name === 'balance' ? 0 : undefined,
                            },
                        }}
                    />
                ))}

                {errorMessage && (
                    <Typography color="error">{errorMessage}</Typography>
                )}

                <Button type="submit" variant="contained" disabled={isLoading}>
                    {isLoading ? 'Creating Account...' : 'Register'}
                </Button>
            </StyledForm>
        </StyledFormContainer>
    );
};
