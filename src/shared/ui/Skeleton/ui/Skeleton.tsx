import { classNames } from 'shared/lib/classNames/classNames';
import { PropsWithClassName } from 'shared/types';
import { CSSProperties, useMemo } from 'react';
import cls from './Skeleton.module.scss';

type SkeletonProps = PropsWithClassName & {
    width?: string | number;
    height?: string | number;
    borderRadius?: string;
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        className, height, width, borderRadius,
    } = props;

    const style = useMemo<CSSProperties>(() => ({
        height,
        width,
        borderRadius,
    }), [borderRadius, height, width]);
    return (
        <div className={classNames(cls.Skeleton, {}, [className])} style={style} />
    );
};
