import { memo } from 'react';

import AppLogoIcon from '@/shared/assets/icons/app.svg?react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../Stack';

import classes from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => (
    <HStack
        maxWidth
        justify="center"
        className={classNames(classes.AppLogo, {}, [className])}
    >
        <AppLogoIcon
            width={size}
            height={size}
            color="black"
            className={classes.appLogoIcon}
        />
        <div className={classes.gradientLarge} />
        <div className={classes.gradientSmall} />
    </HStack>
));
