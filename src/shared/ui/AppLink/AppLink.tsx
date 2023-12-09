import { classNames } from 'shared/lib/classNames/classNames';
import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  INVERTED_PRIMARY = 'inverted_primary',
  INVERTED_SECONDARY = 'inverted_secondary',
  DANGER = 'danger',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { t } = useTranslation();
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        content,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children || content || t('AppLink')}
        </Link>
    );
};
