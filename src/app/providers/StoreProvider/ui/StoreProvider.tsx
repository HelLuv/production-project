import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from 'shared/lib/types/DeepPartial';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: ReducersMapObject<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;
    const store = createReduxStore({
        initialState: initialState as StateSchema,
        asyncReducers,
    });

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
