import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import {
    fetchArticleDetailsComments,
} from 'pages/ArticleDetailsPage/model/services/fetchArticleDetailsComments/fetchArticleDetailsComments';
import { ArticleDetailsCommentsSchema } from '../../types/ArticleDetailsCommentsSchema';

const commentsAdapter = createEntityAdapter({
    selectId: (comment: Comment) => comment.id,
    sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const articleDetailsCommentsInitialState: ArticleDetailsCommentsSchema = {
    isLoading: true,
    ids: [],
    entities: {},
    error: undefined,
};

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments
        || commentsAdapter.getInitialState(articleDetailsCommentsInitialState),
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: articleDetailsCommentsInitialState,
    reducers: {},
    extraReducers: (builder) => builder
        .addCase(fetchArticleDetailsComments.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        })
        .addCase(fetchArticleDetailsComments.fulfilled, (state, action) => {
            // @ts-ignore
            commentsAdapter.setAll(state, action.payload);
            state.isLoading = false;
        })
        .addCase(fetchArticleDetailsComments.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }),
});

export const {
    reducer: articleDetailsCommentsReducer,
    actions: articleDetailsCommentsActions,
} = articleDetailsCommentsSlice;
