import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const {
        item: {
            path, theme, Icon, key,
        },
        collapsed,
    } = props;
    const { t } = useTranslation();

    return (
        <AppLink
            theme={theme || AppLinkTheme.INVERTED_PRIMARY}
            to={path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <Icon className={cls.icon} />
            <span className={cls.link}>
                {t(key)}
            </span>
        </AppLink>
    );
});
