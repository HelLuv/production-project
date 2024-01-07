import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  children?: ReactNode;
}

export const ArticleList = (props: ArticleListProps) => {
    const { className, children } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleList, {}, [className])}>
            {children}
        </div>
    );
};
