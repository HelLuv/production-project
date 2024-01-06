const Path = {
    About: 'about',
    Profile: 'profile',
    Articles: 'articles',
} as const;

const getRoutePath = (...paths: string[]) => `/${paths.join('/')}`;

const ID_PLACEHOLDER = ':id';

export const AppRoute = {
    Main: () => getRoutePath(),
    About: () => getRoutePath(Path.About),
    Profile: (id = ID_PLACEHOLDER) => getRoutePath(Path.Profile, id),
    Articles: () => getRoutePath(Path.Articles),
    ArticleDetails: (id = ID_PLACEHOLDER) => getRoutePath(Path.Articles, id),
    NotFound: () => '*',
} as const;
