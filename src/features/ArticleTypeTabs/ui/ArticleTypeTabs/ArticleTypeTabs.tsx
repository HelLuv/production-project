import { PropsWithClassName } from 'shared/types';
import { memo, useMemo } from 'react';
import { Tab, Tabs } from 'shared/ui/Tabs/ui/Tabs';
import { ArticleTypeTab, ValuesOfArticleTypeTab } from '../../model/constants';

type ArticleTypeTabsProps = PropsWithClassName & {
    value: ValuesOfArticleTypeTab;
    onTabClick: (newTab: ValuesOfArticleTypeTab) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, onTabClick, value } = props;

    const tabs = useMemo<Tab<ValuesOfArticleTypeTab, string>[]>(() => [
        {
            value: ArticleTypeTab.ALL,
            label: 'All',
        },
        {
            value: ArticleTypeTab.IT,
            label: 'IT',
        },
        {
            value: ArticleTypeTab.Economics,
            label: 'Economics',
        },
        {
            value: ArticleTypeTab.Science,
            label: 'Science',
        },
    ], []);

    return (
        <Tabs tabs={tabs} value={value} onTabClick={onTabClick} className={className} />
    );
});

ArticleTypeTabs.displayName = 'ArticleTypeTabs';
