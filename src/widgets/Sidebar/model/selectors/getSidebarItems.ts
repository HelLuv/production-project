import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import AboutIconDeprecated from '@/shared/assets/icons/about.svg?react';
import ArticlesIconDeprecated from '@/shared/assets/icons/articles.svg?react';
import HomeIconDeprecated from '@/shared/assets/icons/home.svg?react';
import ArticleIcon from '@/shared/assets/icons/import/article.svg?react';
import ProfileIcon from '@/shared/assets/icons/import/avatar.svg?react';
import MainIcon from '@/shared/assets/icons/import/home.svg?react';
import AboutIcon from '@/shared/assets/icons/import/Info.svg?react';
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg?react';
import {
    getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';

import { SidebarItemType } from '../types/sidebar';

export const useSidebarItems = () => {
    const userData = useSelector(getUserAuthData);
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Main page',
            Icon: toggleFeatures({
                name: 'isSiteRedesigned',
                off: () => HomeIconDeprecated,
                on: () => MainIcon,
            }),
        },
        {
            path: getRouteAbout(),
            text: 'About page',
            Icon: toggleFeatures({
                name: 'isSiteRedesigned',
                off: () => AboutIconDeprecated,
                on: () => AboutIcon,
            }),
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                text: 'Profile page',
                Icon: toggleFeatures({
                    name: 'isSiteRedesigned',
                    off: () => ProfileIconDeprecated,
                    on: () => ProfileIcon,
                }),

                authOnly: true,
            },
            {
                path: getRouteArticles(),
                text: 'Articles page',
                Icon: toggleFeatures({
                    name: 'isSiteRedesigned',
                    off: () => ArticlesIconDeprecated,
                    on: () => ArticleIcon,
                }),

                authOnly: true,
            },
        );
    }
    return sidebarItemsList;
};
