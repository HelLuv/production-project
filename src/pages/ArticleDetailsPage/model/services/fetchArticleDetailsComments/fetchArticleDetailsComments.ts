import { createAsyncThunk } from '@reduxjs/toolkit';
import { ID } from 'shared/types';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { isAxiosError } from 'shared/helpers';

export const fetchArticleDetailsComments = createAsyncThunk<Comment[], ID | undefined, ThunkConfig<string>>(
    'articleDetailsComments/fetchArticleDetailsComments',
    async (articleId, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;

        try {
            if (!articleId) {
                throw new Error('Article id is undefined');
            }

            const response = await extra.api.get<Comment[]>(`/articles/${articleId}/comments`, {
                params: {
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error('Article is undefined');
            }

            return response.data;
        } catch (error) {
            const code = isAxiosError(error) && error.response ? `${error.response.status}` : 'unknown error';

            return rejectWithValue(code);
        }
    },
);
