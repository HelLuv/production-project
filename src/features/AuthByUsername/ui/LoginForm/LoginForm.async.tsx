import { lazy } from 'react';
import { asyncDelay, makeModuleDefault } from 'shared/helpers';

export const LoginFormAsync = lazy(async () => {
    await asyncDelay();
    return import('./LoginForm').then(({ LoginForm }) => makeModuleDefault(LoginForm));
});
