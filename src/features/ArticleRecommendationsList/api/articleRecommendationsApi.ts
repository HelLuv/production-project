import { rtkApi } from 'shared/api/rtkApi';
import { Article } from 'entities/Article';

const articleRecommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const useArticleRecommendationList = articleRecommendationsApi.useGetArticleRecommendationListQuery;
