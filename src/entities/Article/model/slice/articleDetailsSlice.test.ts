import { articleDetailsReducer } from './articleDetailsSlice';
import { articleMock } from '../../test/articleMock';
import { fetchArticleById } from '../service/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

const article: Article = articleMock;

describe('articleDetailsSlice.test.ts', () => {
    test('test fetchArticleById service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: 'error',
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.pending,
            ),
        ).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('test fetchArticleById service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            data: undefined,
            error: 'error',
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(article, '', ''),
            ),
        ).toEqual({
            isLoading: false,
            data: article,
            error: undefined,
        });
    });
});
