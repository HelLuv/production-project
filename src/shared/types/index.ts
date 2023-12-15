import { ReactNode } from 'react';

export type ValuesOf<T> = T[keyof T];

export type ValuesOfArray<T extends Record<number, unknown>> = T[number];

export type PropsWithClassName = {
    className?: string;
};

export type PropsWithDataAttributes = {
    [key in `data-${string}`]?: string;
};

export type PropsWithChildren = {
    children: ReactNode;
};

export type Option<V = string, L = string>= {
    label: L;
    value: V;
};

export type Callback = (...args: any[]) => any;

export type ExtendableProps<
    ExtendedProps = Record<string, unknown>,
    OverrideProps = Record<string, unknown>
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

// export type DeepPartial<T> = T extends any[]
//     ? T
//     : T extends Record<string, any>
//         ? {
//             [P in keyof T]?: DeepPartial<T[P]>;
//         }
//         : T;

export type ID = string;

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;
