import type { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { AppRoute } from './router';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
};
export const routerConfig: Record<keyof typeof AppRoute, AppRouteProps> = {
    Main: {
        path: AppRoute.Main(),
        element: <MainPage />,
    },
    About: {
        path: AppRoute.About(),
        element: <AboutPage />,
    },
    Profile: {
        path: AppRoute.Profile(),
        element: <ProfilePage />,
        authOnly: true,
    },
    NotFound: {
        path: AppRoute.NotFound(),
        element: <NotFoundPage />,
    },
};
