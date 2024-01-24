import { PropsWithClassName, ValuesOf } from 'shared/types';
import { Card } from 'shared/ui/Card';
import { classNames } from 'shared/lib/classNames';
import { Skeleton } from 'shared/ui/Skeleton';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

type ArticleListItemSkeletonProps = PropsWithClassName & {
    view: ValuesOf<typeof ArticleView>;
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.List) {
        return (
            <Card className={classNames(className, {}, [cls.list])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} borderRadius="50%" />
                    <Skeleton width={150} height={16} className={cls.username} />
                    <Skeleton width={100} height={16} className={cls.date} />
                </div>

                <Skeleton width={250} height={25} className={cls.title} />

                <Skeleton width={150} height={16} className={cls.types} />

                <div className={cls.imageWrapper}>
                    <Skeleton className={cls.image} />
                </div>

                <Skeleton height={150} />

                <div className={cls.footer}>
                    <Skeleton width={150} height={38} className={cls.button} />
                    <Skeleton width={100} height={16} className={cls.views} />
                </div>
            </Card>
        );
    }

    return (
        <Card className={classNames(className, {}, [cls.grid])}>
            <div className={cls.imageWrapper}>
                <Skeleton className={cls.image} />
            </div>
            <div className={cls.infoWrapper}>
                <Skeleton width={130} height={16} />
            </div>
            <Skeleton width={150} height={16} className={cls.title} />
        </Card>
    );
};
