import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPage } from 'pages/ArticlesPage/model/selectors/getArticlesPage/getArticlesPage';

export const getArticlesPageView = createSelector(getArticlesPage, (state) => state.view);
