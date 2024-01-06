import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
    children?: ReactNode;
}

export const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const { className, children } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            {children}
        </div>
    );
});
