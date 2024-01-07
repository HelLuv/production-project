import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetails } from 'entities/Article/model/selectors/getArticleDetails/getArticleDetails';

export const getArticleDetailsData = createSelector(getArticleDetails, (state) => state?.data);
