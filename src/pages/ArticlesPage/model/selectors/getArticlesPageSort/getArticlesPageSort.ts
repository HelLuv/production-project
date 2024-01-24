import { createSelector } from '@reduxjs/toolkit';

import { getArticlesPage } from '../getArticlesPage/getArticlesPage';

export const getArticlesPageSort = createSelector(getArticlesPage, (state) => state?.sort);
