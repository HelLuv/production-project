import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { rtkApi } from 'shared/api/rtkApi';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';
import { createReducerManager } from './reducerManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';

type StoreConfig = {
    initialState?: StateSchema;
    asyncReducers?: ReducersMapObject<StateSchema>;
    navigate?: (to: To, options?: NavigateOptions) => void;
};

export function createReduxStore({ initialState, asyncReducers, navigate }: StoreConfig) {
    const ensuredAsyncReducers = asyncReducers || {};

    const rootReducer: ReducersMapObject<StateSchema> = {
        ...ensuredAsyncReducers,
        counter: counterReducer,
        user: userReducer,

        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArgument: ThunkExtraArg = {
        api: $api,
        navigate,
    };

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument,
            },
        }).concat(rtkApi.middleware),
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
