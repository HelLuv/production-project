import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from '../articleDetailsCommentsSlice/articleDetailsCommentsSlice';
import {
    articleDetailsRecommendationsReducer,
} from '../articleDetailsRecommendationsSlice/articleDetailsRecommendationsSlice';

export const articleDetailPageReducer = combineReducers({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsRecommendationsReducer,
});
