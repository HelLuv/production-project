import { createSelector } from '@reduxjs/toolkit';

import { getArticlesPage } from '../getArticlesPage/getArticlesPage';

export const getArticlesPageOrder = createSelector(getArticlesPage, (state) => state?.order);
