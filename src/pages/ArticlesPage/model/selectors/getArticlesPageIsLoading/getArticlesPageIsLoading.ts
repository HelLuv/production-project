import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPage } from 'pages/ArticlesPage/model/selectors/getArticlesPage/getArticlesPage';

export const getArticlesPageIsLoading = createSelector(getArticlesPage, (state) => state.isLoading);
