import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
    LOCAL_STORAGE_LAST_DESIGN_KEY,
    USER_LOCALSTORAGE_KEY,
} from '@/shared/const/localStorage';
import { setFeatureFlags } from '@/shared/lib/features';

import { initAuthData } from '../services/initAuthData';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { UserSchema, User } from '../types/user';

const initialState: UserSchema = {
    _isInitiated: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);

            localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
            localStorage.setItem(
                LOCAL_STORAGE_LAST_DESIGN_KEY,
                action.payload.features?.isSiteRedesigned ? 'new' : 'old',
            );
        },
        logOut: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            saveJsonSettings.fulfilled,
            (state, action: PayloadAction<JsonSettings>) => {
                if (state.authData) {
                    state.authData.jsonSettings = action.payload;
                }
            },
        );

        builder.addCase(
            initAuthData.fulfilled,
            (state, { payload }: PayloadAction<User>) => {
                state.authData = payload;
                setFeatureFlags(payload.features);
                state._isInitiated = true;
            },
        );

        builder.addCase(initAuthData.rejected, (state) => {
            state._isInitiated = true;
        });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
