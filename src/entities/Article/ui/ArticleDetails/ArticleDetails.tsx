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
import {
    getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading';
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError';
import { fetchArticleDetailsData } from '../../model/services/fetchArticleDetailsData/fetchArticleDetailsData';
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

    return (
        <VStack gap={16} className={className}>
            {articleDetailsData?.img && (
                <div className={cls.avatarWrapper}>
                    <Avatar size={200} src={articleDetailsData?.img} alt="" className={cls.avatar} />
                </div>
            )}

            <VStack gap={8}>
                <Text variant={TextVariant.Title} size={TextSize.Large}>
                    {articleDetailsData?.title}
                </Text>
                <Text size={TextSize.Large}>{articleDetailsData?.subtitle}</Text>
            </VStack>

            <VStack gap={4}>
                <HStack gap={4}>
                    {/* <Icon icon={EyeIcon} className={cls.metaIcon} /> */}
                    <Text>{articleDetailsData?.views}</Text>
                </HStack>

                <HStack gap={4}>
                    {/* <Icon icon={CalendarIcon} className={cls.metaIcon} /> */}
                    <Text>{articleDetailsData?.createdAt}</Text>
                </HStack>
            </VStack>

            {/* <VStack gap={8}> */}
            {/*    {articleDetailsData?.blocks.map((block) => ( */}
            {/*        <ArticleBlockComponent key={block.id} block={block} /> */}
            {/*    ))} */}
            {/* </VStack> */}
        </VStack>
    );
};
