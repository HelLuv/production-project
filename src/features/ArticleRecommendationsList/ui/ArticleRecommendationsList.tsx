import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Text, TextVariant } from 'shared/ui/Text';
import { ArticleList, ArticleView } from 'entities/Article';
import { useArticleRecommendationList } from '../api/articleRecommendationsApi';
import cls from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const { data, isLoading } = useArticleRecommendationList(3);

    return (
        <VStack gap={8} className={classNames(cls.ArticleRecommendationsList, {}, [className])}>
            <Text variant={TextVariant.Title} className={cls.sectionTitle}>
                {t('article-details.recommendations')}
            </Text>
            <ArticleList
                className={cls.recommendations}
                articles={data}
                isLoading={isLoading}
                view={ArticleView.Grid}
                linksTarget="_blank"
            />
        </VStack>
    );
});
