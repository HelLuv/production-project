import { MouseEventHandler, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { PropsWithClassName } from 'shared/types';
import { Card } from 'shared/ui/Card';
import { CardTheme } from 'shared/ui/Card/ui/Card';
import cls from './Tabs.module.scss';

export type Tab<V extends string, L extends ReactNode> = {
    value: V;
    label: L;
}

type TabsProps<V extends string, L extends ReactNode> = PropsWithClassName & {
    tabs: Tab<V, L>[];
    value: V;
    onTabClick: (newTab: V) => void;
    onClick?: MouseEventHandler;
}
export const Tabs = <V extends string, L extends ReactNode>(props: TabsProps<V, L>) => {
    const {
        onClick,
        onTabClick,
        tabs,
        value,
        className,
    } = props;

    const clickHandle = (newTab: V): MouseEventHandler => (evt) => {
        if (value !== newTab) {
            onTabClick(newTab);
        }

        onClick?.(evt);
    };

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    className={classNames(cls.tab, { [cls.active]: value === tab.value })}
                    key={tab.value}
                    theme={value === tab.value ? CardTheme.Contained : CardTheme.Outlined}
                    onClick={clickHandle(tab.value)}
                >
                    {tab.label}
                </Card>
            ))}
        </div>
    );
};
