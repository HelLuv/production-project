import { lazy } from 'react';
import { makeModuleDefault } from 'shared/helpers';

export const MainPageAsync = lazy(async () => import('./MainPage')
    .then(({ MainPage }) => makeModuleDefault(MainPage)));
