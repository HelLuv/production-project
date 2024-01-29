import { memo, useCallback } from 'react';
import { ReducersList, useDynamicReducers } from 'shared/hooks/useDynamicReducers';
import { Page } from 'widgets/Page';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { useProjectEffect } from 'shared/hooks/useProjectEffect';
import { fetchArticlesNextPage } from 'pages/ArticlesPage/model/services/fetchArticlesNextPage/fetchArticlesNextPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice/articlesPageSlice';
import cls from './ArticlesPage.module.scss';

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};
export const ArticlesPage = memo(() => {
    useDynamicReducers(reducers, {
        keepMounted: true,
    });

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    useProjectEffect(() => {
        dispatch(initArticlesPage(searchParams));
    }, [dispatch]);

    const onPageScrollEnd = useCallback(() => {
        dispatch(fetchArticlesNextPage());
    }, [dispatch]);

    return (
        <Page onScrollEnd={onPageScrollEnd}>
            <h1>{t('articles.title')}</h1>
            <p>{t('articles.content')}</p>
            <ArticlesPageFilters className={cls.filters} />
            <ArticlesInfiniteList />
        </Page>
    );
});
