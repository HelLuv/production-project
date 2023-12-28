import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

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
                throw new Error();
            }

            dispatch(userActions.setAuthData(data));
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
            return data;
        } catch (error) {
            console.log(error);

            return rejectWithValue(error.response.data.message || 'Something went wrong!');
        }
    },
);
