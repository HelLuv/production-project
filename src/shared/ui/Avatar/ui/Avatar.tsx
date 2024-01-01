/* eslint-disable react/prop-types */
import * as React from 'react';
import {
    CSSProperties, forwardRef, ImgHTMLAttributes, memo, useMemo,
} from 'react';

import { classNames } from 'shared/lib/classNames';
import { ExtendableProps, PropsWithClassName } from 'shared/types';
import Placeholder from 'shared/assets/images/user-avatar-placeholder.jpeg';

import cls from './Avatar.module.scss';

type ExtendedProps = ImgHTMLAttributes<HTMLImageElement>;

type OverrideProps = {
    size?: number;
};

type AvatarProps = PropsWithClassName & ExtendableProps<ExtendedProps, OverrideProps>;

const DEFAULT_SIZE = 100;

export const Avatar = memo<AvatarProps>(
    forwardRef<HTMLImageElement, AvatarProps>(({
        className,
        src,
        alt,
        size = DEFAULT_SIZE,
        ...restProps
    }: AvatarProps, ref) => {
        const style = useMemo<CSSProperties>(
            () => ({
                width: size,
                height: size,
            }),
            [size],
        );

        return (
            <img
                ref={ref}
                src={src || Placeholder}
                alt={alt}
                className={classNames(className, {}, [cls.avatar])}
                style={style}
                {...restProps}
            />
        );
    }),
);

Avatar.displayName = 'Avatar';
