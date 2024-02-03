import { lazy } from 'react';

import { makeModuleDefault } from 'shared/helpers';

export const AboutPageAsync = lazy(async () => import('./AboutPage')
    .then(({ AboutPage }) => makeModuleDefault(AboutPage)));
