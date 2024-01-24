import { MouseEventHandler } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { PropsWithChildren, PropsWithClassName, ValuesOf } from 'shared/types';
import cls from './Card.module.scss';

export const CardTheme = {
    Contained: 'contained',
    Outlined: 'outlined',
};

type CardProps = PropsWithClassName & PropsWithChildren & {
    theme?: ValuesOf<typeof CardTheme>;
    onClick?: MouseEventHandler;
    max?: boolean;
}

export const Card = (props: CardProps) => {
    const {
        className,
        children, max
        = false,
        theme = CardTheme.Contained,
        ...restProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.max]: max,
    };

    return (
        <div
            className={classNames(cls.Card, mods, [className])}
            {...restProps}
        >
            {children}
        </div>
    );
};
