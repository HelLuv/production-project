import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';
import { useMountEffect } from './useMountEffect';

export type ReducersList = {
    [key in StateSchemaKey]?: Reducer<NonNullable<StateSchema[key]>>;
};

export type DynamicReducersOptions = {
    keepMounted?: boolean;
};

export const useDynamicReducers = (reducers: ReducersList, options: DynamicReducersOptions = {}) => {
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useMountEffect(() => {
        const reducersMap = store.reducerManager.getReducerMap();

        Object.entries(reducers).forEach(([key, reducer]) => {
            if (!reducersMap[key as StateSchemaKey]) {
                store.reducerManager.add(key as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${key} reducer` });
            }
        });

        return () => {
            if (!options.keepMounted) {
                Object.entries(reducers).forEach(([key]) => {
                    if (!reducersMap[key as StateSchemaKey]) {
                        store.reducerManager.remove(key as StateSchemaKey);
                        dispatch({ type: `@DESTROY ${key} reducer` });
                    }
                });
            }
        };
    });
};
