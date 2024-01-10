import { useTranslation } from 'react-i18next';
import { ReducersList, useDynamicReducers } from 'shared/hooks/useDynamicReducers';
import { ID, PropsWithClassName } from 'shared/types';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { useProjectEffect } from 'shared/hooks/useProjectEffect';
import { Avatar } from 'shared/ui/Avatar';
import {
    Text, TextSize, TextTheme, TextVariant,
} from 'shared/ui/Text';
import { HStack, VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton';
import { Icon } from 'shared/ui/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { ArticleBlockComponent } from 'entities/Article/ui/ArticleBlockComponent/ArticleBlockComponent';
import { getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors';
import { fetchArticleDetailsData } from '../../model/services';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

const dynamicReducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

type ArticleDetailsProps = PropsWithClassName & {
    id: ID;
};

export const ArticleDetails = ({ className, id }: ArticleDetailsProps) => {
    useDynamicReducers(dynamicReducers);

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const articleDetailsData = useSelector(getArticleDetailsData);
    const articleDetailsIsLoading = useSelector(getArticleDetailsIsLoading);
    const articleDetailsError = useSelector(getArticleDetailsError);

    useProjectEffect(() => {
        dispatch(fetchArticleDetailsData(id));
    }, [dispatch, id]);

    if (articleDetailsIsLoading) {
        return (
            <VStack gap={16} className={className}>
                <Skeleton className={cls.avatarWrapper} width={200} height={200} borderRadius="50%" />
                <Skeleton width={300} height={24} />
                <Skeleton width={600} height={24} />
                <Skeleton height={200} />
                <Skeleton height={200} />
            </VStack>
        );
    }

    if (articleDetailsError) {
        return (
            <div className={className}>
                <Text
                    variant="title"
                    size={TextSize.Large}
                    theme={TextTheme.Error}
                >
                    {t('article-details.error.not-found')}
                </Text>
            </div>
        );
    }

    const {
        createdAt,
        title,
        subtitle,
        img,
        views,
        blocks = [],
    } = articleDetailsData || {};

    return (
        <VStack gap={16} className={className}>
            {img && (
                <div className={cls.avatarWrapper}>
                    <Avatar size={200} src={img} alt="" className={cls.avatar} />
                </div>
            )}

            <VStack gap={8}>
                <Text variant={TextVariant.Title} size={TextSize.Large}>
                    {title}
                </Text>
                <Text size={TextSize.Large}>{subtitle}</Text>
            </VStack>

            <VStack gap={4}>
                <HStack gap={4}>
                    <Icon icon={EyeIcon} className={cls.metaIcon} />
                    <Text>{views}</Text>
                </HStack>

                <HStack gap={4}>
                    <Icon icon={CalendarIcon} className={cls.metaIcon} />
                    <Text>{createdAt}</Text>
                </HStack>
            </VStack>

            <VStack gap={8}>
                {blocks.map((block) => (
                    <ArticleBlockComponent key={block.id} block={block} />
                ))}
            </VStack>
        </VStack>
    );
};
