import { CSSProperties, memo, useMemo } from 'react';

import UserIcon from '@/shared/assets/icons/user.svg?react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { AppImage } from '../AppImage/AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

import classes from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, src, size = 100, alt } = props;

    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = <Skeleton height={size} width={size} border="50%" />;
    const errorFallback = <Icon Svg={UserIcon} width={size} height={size} />;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            style={styles}
            className={classNames(classes.Avatar, mods, [className])}
            alt={alt}
        />
    );
});
