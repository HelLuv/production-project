import { lazy } from 'react';
import { makeModuleDefault } from 'shared/helpers';

export const AddCommentFormAsync = lazy(async () => import('./AddCommentForm')
    .then(({ AddCommentForm }) => makeModuleDefault(AddCommentForm)));
