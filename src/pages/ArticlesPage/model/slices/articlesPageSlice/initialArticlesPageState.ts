import { ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/const/queryParams';
import { ArticleSortField } from 'features/ArticleSortSelector';
import { ArticlesPageSchema } from '../../types/articlesPageSchema';

export const initialArticlesPageState: ArticlesPageSchema = {
    isLoading: true,
    ids: [],
    entities: {},
    error: undefined,
    page: 1,
    limit: 3,
    hasMore: true,
    view: ArticleView.List,
    order: SortOrder.Asc,
    sort: ArticleSortField.Views,
    search: '',
    type: 'ALL',
};
