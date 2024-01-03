import { render } from '@testing-library/react';
import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ReducersList } from 'shared/hooks/useDynamicReducers';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { DeepPartial } from '../../types/DeepPartial';

export interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: ReducersList;
}

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
    const { route = '/', initialState, asyncReducers = {} } = options;
    return render(
        <StoreProvider
            initialState={initialState as StateSchema}
            asyncReducers={asyncReducers as ReducersMapObject<StateSchema>}
        >
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
}
