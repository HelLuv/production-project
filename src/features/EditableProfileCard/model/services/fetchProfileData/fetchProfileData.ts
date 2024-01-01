import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { isAxiosError } from 'shared/helpers';
import { ID } from 'shared/types';
import { Profile } from 'entities/Profile';

export const fetchProfileData = createAsyncThunk<Profile, ID, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (profileId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Profile>(`/profile/${profileId}`);
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
