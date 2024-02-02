import { classNames } from 'shared/lib/classNames/classNames';
import { PropsWithClassName, ValuesOf } from 'shared/types';
import { useSelector } from 'react-redux';
import { getArticlesPageView } from 'pages/ArticlesPage/model/selectors/getArticlesPageView/getArticlesPageView';
import { getArticlesPageSearch } from 'pages/ArticlesPage/model/selectors/getArticlesPageSearch/getArticlesPageSearch';
import { getArticlesPageType } from 'pages/ArticlesPage/model/selectors/getArticlesPageType/getArticlesPageType';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getArticlesPageSort } from 'pages/ArticlesPage/model/selectors/getArticlesPageSort/getArticlesPageSort';
import { getArticlesPageOrder } from 'pages/ArticlesPage/model/selectors/getArticlesPageOrder/getArticlesPageOrder';
import { useDebouncedCallback } from 'shared/hooks/useDebouncedCallback';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles/fetchArticles';
import { useCallback } from 'react';
import { ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/const/queryParams';
import { ArticleTypeTab } from 'features/ArticleTypeTabs/model/constants';
import { Card } from 'shared/ui/Card';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { Input } from 'shared/ui/Input';
import { ArticleSortField, ArticleSortSelector } from 'features/ArticleSortSelector';
import { ArticleTypeTabs } from 'features/ArticleTypeTabs';
import cls from './ArticlesPageFilters.module.scss';
import { articlesPageActions } from '../../model/slices/articlesPageSlice/articlesPageSlice';

type ArticlesPageFiltersProps = PropsWithClassName;

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
    const { className } = props;

    const view = useSelector(getArticlesPageView);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const dispatch = useAppDispatch();

    const refetchData = useDebouncedCallback(
        () => {
            dispatch(fetchArticles({ replace: true }));
        },
        500,
        [dispatch],
    );

    const onViewSelect = useCallback((newView: ValuesOf<typeof ArticleView>) => {
        dispatch(articlesPageActions.setView(newView));
    }, [dispatch]);

    const onOrderSelect = useCallback((newOrder: ValuesOf<typeof SortOrder>) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        refetchData();
    }, [dispatch, refetchData]);

    const onSortSelect = useCallback((newSort: ValuesOf<typeof ArticleSortField>) => {
        dispatch(articlesPageActions.setSort(newSort));
        refetchData();
    }, [dispatch, refetchData]);

    const onSearchChange = useCallback((newSearch: string) => {
        dispatch(articlesPageActions.setSearch(newSearch));
        refetchData();
    }, [dispatch, refetchData]);

    const onTypeTabClick = useCallback((newTab: ValuesOf<typeof ArticleTypeTab>) => {
        dispatch(articlesPageActions.setType(newTab));
        refetchData();
    }, [dispatch, refetchData]);

    return (
        <div className={classNames(cls.articlesPageFilters, {}, [className])}>
            <Card className={cls.filters}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onOrderSelect={onOrderSelect}
                    onSortSelect={onSortSelect}
                />
                <ArticleViewSelector
                    className={cls.viewSelector}
                    view={view}
                    onSelect={onViewSelect}
                />
            </Card>

            <Card>
                <Input placeholder="Search articles" value={search} onChange={onSearchChange} />
            </Card>

            <ArticleTypeTabs value={type} onTabClick={onTypeTabClick} className={cls.tabs} />
        </div>
    );
};
