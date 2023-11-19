import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <nav className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/">Main Page</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">About Us</AppLink>
            <AppLink theme={AppLinkTheme.DANGER} to="https://google.com">QUIT!</AppLink>
        </div>
    </nav>
);
