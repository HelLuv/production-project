import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPage } from 'pages/ArticlesPage/model/selectors/getArticlesPage/getArticlesPage';

export const getArticlesPagePage = createSelector(getArticlesPage, (state) => state.page);
