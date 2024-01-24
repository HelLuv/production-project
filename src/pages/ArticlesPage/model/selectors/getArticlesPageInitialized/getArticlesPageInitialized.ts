import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPage } from 'pages/ArticlesPage/model/selectors/getArticlesPage/getArticlesPage';

export const getArticlesPageInitialized = createSelector(getArticlesPage, (state) => state.__initialized__);
