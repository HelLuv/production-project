import { classNames } from 'shared/lib/classNames/classNames';
import { type ButtonHTMLAttributes, type FC, type ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
