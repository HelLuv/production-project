import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { isAxiosError } from 'shared/helpers';

type FetchArticlesParams = {
    page?: number;
    replace?: boolean;
};

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesParams, ThunkConfig<string>>(
    'articlesPage/fetchArticles',
    async (params, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const { page = 1 } = params;

        const search = '';
        const type = 'ALL';
        const order = '';
        const sort = '';
        const limit = 20;

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
