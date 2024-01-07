import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { ID } from 'shared/types';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { isAxiosError } from 'shared/helpers';

export const fetchArticleDetailsData = createAsyncThunk<Article, ID, ThunkConfig<string>>(
    'articleDetails/fetchArticleDetailsData',
    async (articleId, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;
        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`, {
                params: {
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error('Article is undefined');
            }

            return response.data;
        } catch (error) {
            const code = isAxiosError(error) && error.response ? `${error.response.status}` : 'unknown';

            return rejectWithValue(code);
        }
    },
);
