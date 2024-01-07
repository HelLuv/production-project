import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  children?: ReactNode;
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
    const { className, children } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
            {children}
        </div>
    );
};
