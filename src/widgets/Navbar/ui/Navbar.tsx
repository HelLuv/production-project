import { memo, useCallback, useMemo, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationsButton } from '@/features/NotificationsButton';
import { getRouteArticleCreate } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';

import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const mainClass = toggleFeatures({
        name: 'isSiteRedesigned',
        on: () => classes.NavbarRedesigned,
        off: () => classes.Navbar,
    });

    const NavbarDeprecated = () =>
        useMemo(
            () => (
                <header className={classNames(mainClass, {}, [className])}>
                    <Text
                        className={classes.appName}
                        title={t('Blog app')}
                        theme={TextTheme.INVERTED}
                    />
                    <AppLink
                        to={getRouteArticleCreate()}
                        theme={AppLinkTheme.SECONDARY}
                        className={classes.createButton}
                    >
                        {t('Create article')}
                    </AppLink>
                    <HStack gap="16" className={classes.actions}>
                        <NotificationsButton />
                        <AvatarDropdown />
                    </HStack>
                </header>
            ),
            [],
        );

    const NavbarRedesigned = () =>
        useMemo(
            () => (
                <header className={classNames(mainClass, {}, [className])}>
                    <HStack gap="16" className={classes.actions}>
                        <NotificationsButton />
                        <AvatarDropdown />
                    </HStack>
                </header>
            ),
            [],
        );

    if (authData) {
        return (
            <ToggleFeatures
                featureName="isSiteRedesigned"
                on={<NavbarRedesigned />}
                off={<NavbarDeprecated />}
            />
        );
    }

    return (
        <header className={classNames(mainClass, {}, [className])}>
            <ToggleFeatures
                featureName="isSiteRedesigned"
                on={
                    <Button
                        className={classes.links}
                        variant="clear"
                        onClick={onShowModal}
                    >
                        {t('Sign in')}
                    </Button>
                }
                off={
                    <ButtonDeprecated
                        className={classes.links}
                        theme={ButtonTheme.CLEAR_INVERTED}
                        onClick={onShowModal}
                    >
                        {t('Sign in')}
                    </ButtonDeprecated>
                }
            />

            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
});
