import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  children?: ReactNode;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const { className, children } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleListItem, {}, [className])}>
            {children}
        </div>
    );
};
