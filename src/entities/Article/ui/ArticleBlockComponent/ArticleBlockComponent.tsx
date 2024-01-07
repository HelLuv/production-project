import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleBlockComponent.module.scss';

interface ArticleBlockComponentProps {
  className?: string;
  children?: ReactNode;
}

export const ArticleBlockComponent = (props: ArticleBlockComponentProps) => {
    const { className, children } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleBlockComponent, {}, [className])}>
            {children}
        </div>
    );
};
