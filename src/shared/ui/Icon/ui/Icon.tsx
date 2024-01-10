import { FC, memo, SVGProps } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ExtendableProps } from 'shared/types';
import cls from './Icon.module.scss';

type IconProps = ExtendableProps<SVGProps<SVGSVGElement>, {
    icon: FC<SVGProps<SVGSVGElement>>
}>;

export const Icon = memo((props: IconProps) => {
    const { className, icon: IconComponent, ...restProps } = props;

    return (
        <IconComponent
            className={classNames(className, {}, [cls.Icon])}
            {...restProps}
        />
    );
});
