import type { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
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
    Articles: {
        path: AppRoute.Articles(),
        element: <ArticlesPage />,
        authOnly: true,
    },
    ArticleDetails: {
        path: AppRoute.ArticleDetails(),
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    ArticleCreate: {
        path: AppRoute.ArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    ArticleEdit: {
        path: AppRoute.ArticleEdit(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    NotFound: {
        path: AppRoute.NotFound(),
        element: <NotFoundPage />,
    },
};
