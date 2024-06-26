import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';

import { LoginErrors } from '../../types/loginSchema';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkAPI) => {
    const {
        rejectWithValue,
        dispatch,
        extra: { api },
    } = thunkAPI;
    try {
        const response = await api.post<User>('/login', authData, {});

        if (!response.data) {
            return rejectWithValue(LoginErrors.SERVER_ERROR);
        }

        dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            if (e.response && e.response.status === 403) {
                // eslint-disable-next-line no-console
                console.log('Error: ', LoginErrors.INCORRECT_DATA, '\n', e);
                return rejectWithValue(LoginErrors.INCORRECT_DATA);
            }
            // eslint-disable-next-line no-console
            console.log('Error: ', LoginErrors.SERVER_ERROR, '\n', e);
            return rejectWithValue(LoginErrors.SERVER_ERROR);
        }
        // eslint-disable-next-line no-console
        console.log('Error: ', LoginErrors.UNKNOWN_ERROR, '\n', e);
        return rejectWithValue(LoginErrors.UNKNOWN_ERROR);
    }
});
