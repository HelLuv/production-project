import { lazy } from 'react';
import { makeModuleDefault } from 'shared/helpers';

export const ArticleDetailsPageAsync = lazy(async () => import('./ArticleDetailsPage')
    .then(({ ArticleDetailsPage }) => makeModuleDefault(ArticleDetailsPage)));
