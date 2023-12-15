import { ReducersList } from 'shared/hooks/useDynamicReducers';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { userReducer } from 'entities/User';
import { DeepPartial } from 'shared/lib/types/DeepPartial';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type Decorator } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    user: userReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema> = {},
    asyncReducers: ReducersList = defaultAsyncReducers,
): Decorator => (StoryComponent) => (
    <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={asyncReducers as ReducersMapObject<StateSchema>}
    >
        <StoryComponent />
    </StoreProvider>
);
