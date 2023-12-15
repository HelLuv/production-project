import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { AxiosInstance } from 'axios';
import { LoginSchema } from 'features/AuthByUsername';
import {
    EnhancedStore, Reducer, ReducersMapObject, UnknownAction,
} from '@reduxjs/toolkit';
import { CombinedState } from '@reduxjs/toolkit/query';
import { rtkApi } from 'shared/api/rtkApi';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm: LoginSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}

export type StateSchemaKey = keyof StateSchema;
// eslint-disable-next-line no-undef
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    // @ts-ignore
    reduce: (state: StateSchema, action: UnknownAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra:ThunkExtraArg;
    state: StateSchema;
}
