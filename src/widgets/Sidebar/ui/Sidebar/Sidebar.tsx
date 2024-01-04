import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { VStack } from 'shared/ui/Stack';
import { AppLink } from 'shared/ui/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import styles from './SideBar.module.scss';

type SideBarProps = {
    className?: string;
};

export function Sidebar({ className }: SideBarProps) {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItems = useSelector(getSidebarItems);

    const onToggle = () => setCollapsed((prevCollapsed) => !prevCollapsed);

    const toggleLabel = collapsed ? 'Expand sidebar' : 'Collapse sidebar';

    return (
        <aside
            id="sidebar"
            data-testid="sidebar"
            className={classNames(className, {
                [styles.collapsed]: collapsed,
            }, [styles.sidebar])}
        >
            <VStack gap={8}>
                {sidebarItems.map(({ key, Icon, path }) => (
                    <AppLink key={key} className={styles.navLink} to={path}>
                        <Icon className={styles.navLinkIcon} />
                        <span>{t(`navbar.${key}`)}</span>
                    </AppLink>
                ))}
            </VStack>

            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>

            <Button
                data-testid="sidebar-toggle"
                className={styles.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
                onClick={onToggle}
                aria-expanded={!collapsed}
                aria-controls="sidebar"
                aria-label={toggleLabel}
            >
                <span aria-hidden="true">{collapsed ? '>' : '<'}</span>
            </Button>
        </aside>
    );
}
