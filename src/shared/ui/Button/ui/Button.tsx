import { classNames } from 'shared/lib/classNames/classNames';
import { type ButtonHTMLAttributes, type FC, type ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    PRIMARY = 'primary',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children?: ReactNode
    theme?: ButtonTheme
    label?: string;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme = ButtonTheme.PRIMARY,
        size = ButtonSize.L,
        label,
        square = false,
        disabled = false,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            {...otherProps}
            className={classNames(cls.button, mods, [className, cls[theme]])}
        >
            {label || children}
        </button>
    );
};
