import { ArticleType } from 'entities/Article';
import { ValuesOf } from 'shared/types';

export const ArticleTypeTab = {
    ALL: 'ALL',
    ...ArticleType,
} as const;

export type ValuesOfArticleTypeTab = ValuesOf<typeof ArticleTypeTab>;
