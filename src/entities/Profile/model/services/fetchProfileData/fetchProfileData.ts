import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { isAxiosError } from 'shared/helpers';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile[], void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;

        try {
            const response = await extra?.api.get<Profile[]>('/profile');
            const { data } = response;
            if (!data) {
                throw new Error('Profile is undefined');
            }

            return data;
        } catch (error) {
            const code = isAxiosError(error) && error.response ? `${error.response.status}` : 'unknown';

            return rejectWithValue(code);
        }
    },
);
