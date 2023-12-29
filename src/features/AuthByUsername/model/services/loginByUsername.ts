import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { isAxiosError } from 'axios';

export interface LoginByUsernameParams {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameParams, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;

        try {
            const response = await extra?.api.post('/login', authData);
            const { data } = response;
            if (!data) {
                throw new Error('User is undefined');
            }

            dispatch(userActions.setAuthData(data));
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
            return data;
        } catch (error) {
            const code = isAxiosError(error) && error.response ? `${error.response.status}` : 'unknown';

            return rejectWithValue(code);
        }
    },
);
