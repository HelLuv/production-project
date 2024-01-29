import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { isAxiosError } from 'shared/helpers';
import { getArticlesPageSearch } from 'pages/ArticlesPage/model/selectors/getArticlesPageSearch/getArticlesPageSearch';
import { getArticlesPageType } from 'pages/ArticlesPage/model/selectors/getArticlesPageType/getArticlesPageType';
import { getArticlesPageOrder } from 'pages/ArticlesPage/model/selectors/getArticlesPageOrder/getArticlesPageOrder';
import { getArticlesPageSort } from 'pages/ArticlesPage/model/selectors/getArticlesPageSort/getArticlesPageSort';
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/getArticlesPageLimit/getArticlesPageLimit';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

type FetchArticlesParams = {
    page?: number;
    replace?: boolean;
};

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesParams, ThunkConfig<string>>(
    'articlesPage/fetchArticles',
    async (params, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const { page = 1 } = params;

        const search = getArticlesPageSearch(getState());
        const type = getArticlesPageType(getState());
        const order = getArticlesPageOrder(getState());
        const sort = getArticlesPageSort(getState());
        const limit = getArticlesPageLimit(getState());

        addQueryParams({
            order,
            search,
            sort,
            type,
        });

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _order: order,
                    _sort: sort,
                    q: search,
                    types: type !== 'ALL' ? type : undefined,
                },
            });

            if (!response.data) {
                return rejectWithValue('Articles are not defined');
            }

            return response.data;
        } catch (error) {
            const code = isAxiosError(error) && error.response ? `${error.response.status}` : 'unknown';

            return rejectWithValue(code);
        }
    },
);
