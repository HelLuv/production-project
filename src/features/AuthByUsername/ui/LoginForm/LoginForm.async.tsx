import { lazy } from 'react';
import { makeModuleDefault } from 'shared/helpers';

export const LoginFormAsync = lazy(async () => import('./LoginForm')
    .then(({ LoginForm }) => makeModuleDefault(LoginForm)));
