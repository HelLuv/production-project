const Path = {
    About: 'about',
    Profile: 'profile',
} as const;

const getRoutePath = (...paths: string[]) => `/${paths.join('/')}`;

const ID_PLACEHOLDER = ':id';

export const AppRoute = {
    Main: () => getRoutePath(),
    About: () => getRoutePath(Path.About),
    Profile: (id = ID_PLACEHOLDER) => getRoutePath(Path.Profile, id),
    NotFound: () => '*',
} as const;
