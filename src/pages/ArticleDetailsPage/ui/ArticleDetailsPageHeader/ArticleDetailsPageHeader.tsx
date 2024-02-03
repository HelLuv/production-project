import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { PropsWithClassName } from 'shared/types';
import { AppRoute } from 'app/providers/router';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { AppLink } from 'shared/ui/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { getIsArticleAuthorView } from '../../model/selectors/getIsArticleAuthorView/getIsArticleAuthorView';
import cls from './ArticleDetailsPageHeader.module.scss';

type ArticleDetailsPageHeaderProps = PropsWithClassName;

const BACK_PATH = AppRoute.Articles();

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const isAuthorView = useSelector(getIsArticleAuthorView);
    const article = useSelector(getArticleDetailsData);

    const editPath = AppRoute.ArticleEdit(article?.id);

    return (
        <div className={classNames(cls.articleDetailsPageHeader, {}, [className])}>
            <AppLink to={BACK_PATH}>
                <Button theme={ButtonTheme.OUTLINE}>
                    {t('article-details.back')}
                </Button>
            </AppLink>

            {isAuthorView && (
                <AppLink to={editPath}>
                    <Button theme={ButtonTheme.OUTLINE} className={cls.backButton}>
                        {t('article-details.edit')}
                    </Button>
                </AppLink>
            )}
        </div>
    );
});
