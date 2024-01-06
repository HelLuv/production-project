import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
    children?: ReactNode;
}

export const ArticlesPage = memo((props: ArticlesPageProps) => {
    const { className, children } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            ARTICLES PAGE!
        </div>
    );
});
