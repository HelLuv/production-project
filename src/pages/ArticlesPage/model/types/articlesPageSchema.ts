import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleType, ArticleView } from 'entities/Article';
import { ValuesOf } from 'shared/types';
import { SortOrder } from 'shared/const/queryParams';
import { ArticleSortField } from 'features/ArticleSortSelector/model/constants';

export type ArticlesPageSchema = EntityState<Article, any> & {
    isLoading: boolean;
    error?: string;
    page: number;
    limit: number;
    hasMore: boolean;
    __initialized__?: boolean;
    view: ValuesOf<typeof ArticleView>;
    order: ValuesOf<typeof SortOrder>
    sort: ValuesOf<typeof ArticleSortField>;
    search: string;
    type: ValuesOf<typeof ArticleType> | 'ALL';
}
