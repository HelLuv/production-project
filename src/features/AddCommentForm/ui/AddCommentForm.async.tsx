import { lazy } from 'react';
import { asyncDelay, makeModuleDefault } from 'shared/helpers';

export const AddCommentFormAsync = lazy(async () => {
    await asyncDelay(300);
    return import('./AddCommentForm').then(({ AddCommentForm }) => makeModuleDefault(AddCommentForm));
});
