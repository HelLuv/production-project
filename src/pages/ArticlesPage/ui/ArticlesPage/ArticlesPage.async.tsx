import { lazy } from 'react';
import { makeModuleDefault } from 'shared/helpers';

export const ArticlesPageAsync = lazy(async () => import('./ArticlesPage')
    .then(({ ArticlesPage }) => makeModuleDefault(ArticlesPage)));
