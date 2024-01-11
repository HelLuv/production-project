import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from '../articleDetailsCommentsSlice/articleDetailsCommentsSlice';
import {
    articleDetailsRecommendationsReducer,
} from '../articleDetailsRecommendationsSlice/articleDetailsRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsRecommendationsReducer,
});
