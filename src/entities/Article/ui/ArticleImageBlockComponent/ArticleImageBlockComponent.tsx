import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  children?: ReactNode;
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
    const { className, children } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
            {children}
        </div>
    );
};
