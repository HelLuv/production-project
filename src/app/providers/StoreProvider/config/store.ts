import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { rtkApi } from 'shared/api/rtkApi';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager/reducerManager';
import { $api } from 'shared/api/api';
import { StateSchema, ThunkExtraArg } from './StateSchema';

type StoreConfig = {
    initialState?: StateSchema;
    asyncReducers?: ReducersMapObject<StateSchema>;
};

export function createReduxStore({ initialState, asyncReducers }: StoreConfig) {
    const ensuredAsyncReducers = asyncReducers || {};

    const rootReducer: ReducersMapObject<StateSchema> = {
        ...ensuredAsyncReducers,
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,

        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArgument: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        // @ts-ignore
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
    store.replaceReducer = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
