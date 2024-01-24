import { StateSchema } from 'app/providers/StoreProvider';
import { initialArticlesPageState } from '../../slices/articlesPageSlice/initialArticlesPageState';

export const getArticlesPage = (state: StateSchema) => state.articlesPage ?? initialArticlesPageState;
