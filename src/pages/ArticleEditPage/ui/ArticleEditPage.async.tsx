import { lazy } from 'react';
import { makeModuleDefault } from 'shared/helpers';

export const ArticleEditPageAsync = lazy(async () => import('./ArticleEditPage')
    .then(({ ArticleEditPage }) => makeModuleDefault(ArticleEditPage)));
