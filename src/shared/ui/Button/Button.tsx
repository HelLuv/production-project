import { classNames } from 'shared/lib/classNames/classNames';
import { type ButtonHTMLAttributes, type FC, type ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children?: ReactNode
    theme?: ThemeButton
    label?: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme = ThemeButton.PRIMARY,
        label,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            {...otherProps}
            className={classNames(cls.button, {}, [className, cls[theme]])}
        >
            {label || children}
        </button>
    );
};
