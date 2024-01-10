import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

export type ArticleDetailsRecommendationsSchema = EntityState<Article, string> & {
    isLoading: boolean;
    error?: string;
}
