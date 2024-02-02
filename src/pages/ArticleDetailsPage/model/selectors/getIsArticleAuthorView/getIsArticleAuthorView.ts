import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from 'entities/Article';
import { getUserAuthData } from 'entities/User/model/selectors';

export const getIsArticleAuthorView = createSelector(getArticleDetailsData, getUserAuthData, (article, user) => {
    if (!article || !user) {
        return false;
    }

    return article.user.id === user.id;
});
