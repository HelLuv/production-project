import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User/model/selectors';
import { getArticleDetailsData } from 'entities/Article';
import { isAxiosError } from 'shared/helpers';
import {
    fetchArticleDetailsComments,
} from 'pages/ArticleDetailsPage/model/services/fetchArticleDetailsComments/fetchArticleDetailsComments';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetailsComments/addCommentForArticle',
    async (text, thunkAPI) => {
        const {
            dispatch, rejectWithValue, extra, getState,
        } = thunkAPI;

        const userData = getUserAuthData(getState());
        const userId = userData?.id;

        const articleDetailsData = getArticleDetailsData(getState());
        const articleId = articleDetailsData?.id;

        if (!userId || !articleId) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                text,
                userId,
                articleId,
            });

            if (!response.data) {
                throw new Error('User is undefined');
            }

            dispatch(fetchArticleDetailsComments(articleId));

            return response.data;
        } catch (error) {
            const code = isAxiosError(error) && error.response ? `${error.response.status}` : 'unknown';

            return rejectWithValue(code);
        }
    },
);
