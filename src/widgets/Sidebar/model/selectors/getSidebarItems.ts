import { createSelector } from '@reduxjs/toolkit';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { AppRoute } from 'app/providers/router/model/router';
import { getUserAuthData } from 'entities/User/model/selectors';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData): SidebarItemType[] => {
    let items: SidebarItemType[] = [
        {
            path: AppRoute.Main(),
            key: 'main',
            Icon: MainIcon,
        },
        {
            path: AppRoute.About(),
            key: 'about',
            Icon: AboutIcon,
        },
    ];

    if (userData) {
        const id = userData?.id;
        items = items.concat([
            {
                path: AppRoute.Profile(id),
                key: 'profile',
                Icon: ProfileIcon,
            },
            {
                path: AppRoute.Articles(),
                key: 'articles',
                Icon: ArticleIcon,
            },
        ]);
    }

    return items;
});
