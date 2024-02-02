import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Option, PropsWithClassName, ValuesOf } from 'shared/types';
import { SortOrder } from 'shared/const/queryParams';
import { Select } from 'shared/ui/Select/Select';
import { ArticleSortField } from '../../model/constants';
import cls from './ArticleSortSelector.module.scss';

type ValuesOfArticleSortField = ValuesOf<typeof ArticleSortField>;
type ValuesOfSortOrder = ValuesOf<typeof SortOrder>;

type ArticleSortSelectorProps = PropsWithClassName & {
    sort: ValuesOfArticleSortField;
    order: ValuesOfSortOrder;
    onSortSelect: (value: ValuesOfArticleSortField) => void;
    onOrderSelect: (value: ValuesOfSortOrder) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        onSortSelect,
        sort,
        onOrderSelect,
        order,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<Option<ValuesOfSortOrder>[]>(() => [
        {
            value: SortOrder.Asc,
            label: t('sort-order.asc'),
        },
        {
            value: SortOrder.Desc,
            label: t('sort-order.desc'),
        },
    ], [t]);

    const sortOptions = useMemo<Option<ValuesOfArticleSortField>[]>(() => [
        {
            value: ArticleSortField.Views,
            label: t('article-sort-field.views'),
        },
        {
            value: ArticleSortField.Title,
            label: t('article-sort-field.title'),
        },
        {
            value: ArticleSortField.CreatedAt,
            label: t('article-sort-field.created-at'),
        },
    ], []);

    return (
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
            <Select
                label={t('article-sort-field.field-label')}
                value={sort}
                onChange={onSortSelect}
                options={sortOptions}
            />
            <Select
                label={t('sort-order.order-label')}
                value={order}
                onChange={onOrderSelect}
                options={orderOptions}
            />
        </div>
    );
});
