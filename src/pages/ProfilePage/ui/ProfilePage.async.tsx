import { lazy } from 'react';
import { makeModuleDefault } from 'shared/helpers';

export const ProfilePageAsync = lazy(async () => import('./ProfilePage')
    .then(({ ProfilePage }) => makeModuleDefault(ProfilePage)));
