import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model/selectors';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                {authData ? (
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        onClick={onLogout}
                    >
                        {t('Logout')}
                    </Button>
                ) : (
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        onClick={onOpenModal}
                    >
                        {t('Login')}
                    </Button>
                )}
            </div>
            <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
        </header>
    );
});
