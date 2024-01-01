import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    PropsWithChildren, PropsWithClassName, PropsWithDataAttributes, ValuesOf,
} from 'shared/types';
import { memo } from 'react';
import cls from './Text.module.scss';

export const TextTheme = {
    Primary: 'primary',
    Error: 'error',
} as const;

export const TextVariant = {
    Title: 'title',
    Text: 'text',
} as const;

export const TextSize = {
    Small: 'smallSize',
    Medium: 'mediumSize',
    Large: 'largeSize',
} as const;

export const TextAlign = {
    Right: 'right',
    Left: 'left',
    Center: 'center',
} as const;

type TextProps = PropsWithClassName & PropsWithChildren & PropsWithDataAttributes & {
    theme?: ValuesOf<typeof TextTheme>;
    variant?: ValuesOf<typeof TextVariant>;
    size?: ValuesOf<typeof TextSize>;
    align?: ValuesOf<typeof TextAlign>;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        children,
        theme = TextTheme.Primary,
        variant = TextVariant.Text,
        size = TextSize.Medium,
        align = TextAlign.Left,
        'data-testid': dataTestId,
        ...otherProps
    } = props;

    const textDataTestId = `${dataTestId}.Text`;

    const mods: Mods = {
        [cls[size]]: true,
        [cls[theme]]: true,
        [cls[variant]]: true,
        [cls[align]]: true,
    };

    return (
        <div
            className={classNames(cls.text, mods, [className])}
            data-testid={textDataTestId}
            {...otherProps}
        >
            {children}
        </div>
    );
});
