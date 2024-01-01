import type {
    PropsWithChildren, PropsWithClassName, ValuesOf, ValuesOfArray,
} from 'shared/types';

import { classNames } from 'shared/lib/classNames';
import { Mods } from 'shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

export const FlexJustify = {
    Start: 'start',
    Center: 'center',
    End: 'end',
    Between: 'between',
} as const;

export const FlexAlign = {
    Start: 'start',
    Center: 'center',
    End: 'end',
    Stretch: 'stretch',
} as const;

export const FlexDirection = {
    Row: 'row',
    Column: 'column',
} as const;

export const FlexGaps = [4, 8, 12, 16, 32] as const;

type ValuesOfFlexJustify = ValuesOf<typeof FlexJustify>;
type ValuesOfFlexAlign = ValuesOf<typeof FlexAlign>;
type ValuesOfFlexDirection = ValuesOf<typeof FlexDirection>;
type ValuesOfFlexGap = ValuesOfArray<typeof FlexGaps>;

const mapJustifyToClassName: Record<ValuesOfFlexJustify, string> = {
    [FlexJustify.Start]: cls.justifyStart,
    [FlexJustify.End]: cls.justifyEnd,
    [FlexJustify.Center]: cls.justifyCenter,
    [FlexJustify.Between]: cls.justifyBetween,
};

const mapAlignToClassName: Record<ValuesOfFlexAlign, string> = {
    [FlexAlign.Start]: cls.alignStart,
    [FlexAlign.End]: cls.alignEnd,
    [FlexAlign.Center]: cls.alignCenter,
    [FlexAlign.Stretch]: cls.alignStretch,
};

const mapDirectionToClassName: Record<ValuesOfFlexDirection, string> = {
    [FlexDirection.Row]: cls.directionRow,
    [FlexDirection.Column]: cls.directionColumn,
};

const mapGapToClassName = FlexGaps.reduce(
    (map, gap) => ({
        ...map,
        [gap]: cls[`gap${gap}`],
    }),
    {} as Record<ValuesOfFlexGap, string>,
);

export type FlexProps = PropsWithClassName &
    PropsWithChildren & {
    justify?: ValuesOfFlexJustify;
    align?: ValuesOfFlexAlign;
    direction?: ValuesOfFlexDirection;
    gap?: ValuesOfFlexGap;
    max?: boolean;
};

export const Flex = ({
    className,
    children,
    justify = FlexJustify.Start,
    align = FlexAlign.Center,
    direction = FlexDirection.Row,
    gap = FlexGaps[0],
    max = false,
}: FlexProps) => {
    const justifyClassName = mapJustifyToClassName[justify];
    const alignClassName = mapAlignToClassName[align];
    const directionClassName = mapDirectionToClassName[direction];
    const gapClassName = mapGapToClassName[gap];
    const mods: Mods = {
        [cls.max]: max,
    };

    const flexClassName = classNames(
        className,
        mods,
        [
            cls.flex,
            justifyClassName,
            alignClassName,
            directionClassName,
            gapClassName,
        ],
    );

    return <div className={flexClassName}>{children}</div>;
};
