import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { PropsWithClassName, ValuesOf } from 'shared/types';
import { Article, ArticleView } from 'entities/Article';
import { AppLinkProps } from 'shared/ui/AppLink/ui/AppLink';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

type ArticleListProps = PropsWithClassName & {
    articles?: Article[];
    isLoading?: boolean;
    view?: ValuesOf<typeof ArticleView>;
    linksTarget?: AppLinkProps['target'];
};

const getSkeletons = (
    count: number,
    view: ValuesOf<typeof ArticleView>,
) => new Array(count)
    .fill(null)
    // eslint-disable-next-line react/no-array-index-key
    .map((_, index) => <ArticleListItemSkeleton view={view} key={index} />);

export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        view = ArticleView.Grid,
        articles,
        linksTarget,
        isLoading,
    } = props;
    const { t } = useTranslation();
    const isEmpty = !articles?.length;

    if (isEmpty && !isLoading) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [className, cls.empty])}
            >
                {t('articles.list.empty')}
            </div>
        );
    }

    const skeletonsCount = view === ArticleView.Grid ? 9 : 3;

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles?.map((article) => (
                <ArticleListItem
                    key={article.id}
                    article={article}
                    view={view}
                    className={cls.card}
                    linksTarget={linksTarget}
                />
            ))}
            {isLoading && getSkeletons(skeletonsCount, view)}
        </div>
    );
};
