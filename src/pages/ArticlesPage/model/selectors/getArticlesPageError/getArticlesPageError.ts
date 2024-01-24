import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPage } from 'pages/ArticlesPage/model/selectors/getArticlesPage/getArticlesPage';

export const getArticlesPageError = createSelector(getArticlesPage, (state) => state.error);
