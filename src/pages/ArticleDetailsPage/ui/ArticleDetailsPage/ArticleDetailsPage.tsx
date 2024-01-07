import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import { ID } from 'shared/types';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const ArticleDetailsPage = memo(() => {
    const { id } = useParams<{ id: ID }>();
    const { t } = useTranslation();

    if (!id) {
        return <Page>{t('article-details.error.not-found')}</Page>;
    }

    return (
        <Page>
            <VStack gap={16} align="stretch">
                {/* <ArticleDetailsPageHeader /> */}
                <ArticleDetails id={id} />
                {/* <ArticleRating articleId={id} /> */}
                {/* <ArticleRecommendationsList /> */}
                {/* <ArticleDetailsComments id={id} /> */}
            </VStack>
        </Page>
    );
});
