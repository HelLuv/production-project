import React, { memo, Suspense } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/deprecated/Card';
import { Page } from '@/widgets/Page';
import { PageLoader } from '@/widgets/PageLoader';

import classes from './ArticleDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../../model/slices';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';
import { ArticleDetailsContainer } from '../ArticleDetailsContainer/ArticleDetailsContainer';
import { ArticleDetailsPageComments } from '../ArticleDetailsPageComments/ArticleDetailsPageComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();

    if (!id) {
        return null;
    }

    const mods: Mods = {};

    // const articleRatingCard = toggleFeatures({
    //   name: 'isArticleRatingEnabled',
    //   on: () => <ArticleRating articleId={id} />,
    //   off: () => <Card>{t('Article rating will be here soon')}</Card>,
    // });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Suspense fallback={<PageLoader />}>
                <ToggleFeatures
                    featureName="isSiteRedesigned"
                    on={
                        <StickyContentLayout
                            content={
                                <Page
                                    className={classNames(
                                        classes.ArticleDetailsPage,
                                        mods,
                                        [className],
                                    )}
                                >
                                    <ArticleDetailsContainer />
                                    <ArticleRating articleId={id} />
                                    <ArticleRecommendationsList
                                        className={classes.recommendations}
                                    />
                                    <ArticleDetailsPageComments id={id} />
                                </Page>
                            }
                            right={<AdditionalInfoContainer />}
                        />
                    }
                    off={
                        <Page
                            className={classNames(
                                classes.ArticleDetailsPage,
                                mods,
                                [className],
                            )}
                        >
                            <ArticleDetailsPageHeader />
                            <ArticleDetails id={id} />
                            <ToggleFeatures
                                featureName="isArticleRatingEnabled"
                                on={<ArticleRating articleId={id} />}
                                off={
                                    <Card>
                                        {t('Article rating will be here soon')}
                                    </Card>
                                }
                            />
                            <ArticleRecommendationsList
                                className={classes.recommendations}
                            />
                            <ArticleDetailsPageComments id={id} />
                        </Page>
                    }
                />
            </Suspense>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
