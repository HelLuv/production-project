import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageHasMore } from 'pages/ArticlesPage/model/selectors/getArticlesPageHasMore/getArticlesPageHasMore';
import {
    getArticlesPageIsLoading,
} from 'pages/ArticlesPage/model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading';
import { getArticlesPagePage } from 'pages/ArticlesPage/model/selectors/getArticlesPagePage/getArticlesPagePage';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles/fetchArticles';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice/articlesPageSlice';

export const fetchArticlesNextPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchArticlesNextPage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const hasMore = getArticlesPageHasMore(getState());
        const isLoading = getArticlesPageIsLoading(getState());
        const page = getArticlesPagePage(getState());

        if (hasMore && !isLoading) {
            const nextPage = page + 1;

            await dispatch(
                fetchArticles({
                    page: nextPage,
                }),
            );

            dispatch(articlesPageActions.setPage(nextPage));
        }
    },
);
