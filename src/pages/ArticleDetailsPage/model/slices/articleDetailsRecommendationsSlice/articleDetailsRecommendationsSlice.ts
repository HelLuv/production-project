import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
    ArticleDetailsRecommendationsSchema,
} from 'pages/ArticleDetailsPage/model/types/ArticleDetailsRecommendationsSchema';

const recommendationAdapter = createEntityAdapter({
    selectId: (article: Article) => article.id,
    sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const articleDetailsRecommendationsInitialState: ArticleDetailsRecommendationsSchema = {
    isLoading: true,
    ids: [],
    entities: {},
    error: undefined,
};

export const getArticleRecommendations = recommendationAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations
        || recommendationAdapter.getInitialState(articleDetailsRecommendationsInitialState),
);

const articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendationsSlice',
    initialState: articleDetailsRecommendationsInitialState,
    reducers: {},
});

export const {
    reducer: articleDetailsRecommendationsReducer,
    actions: articleDetailsRecommendationsActions,
} = articleDetailsRecommendationsSlice;
