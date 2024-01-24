import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleView } from 'entities/Article';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
    title: 'features/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        view: ArticleView.List,
    },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const LightList = Template.bind({});
LightList.args = {};
LightList.decorators = [ThemeDecorator(Theme.LIGHT)];

export const LightGrid = Template.bind({});
LightGrid.args = {
    view: ArticleView.Grid,
};
LightGrid.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkList = Template.bind({});
DarkList.args = {};
DarkList.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkGrid = Template.bind({});
DarkGrid.args = {
    view: ArticleView.Grid,
};
DarkGrid.decorators = [ThemeDecorator(Theme.DARK)];

export const HyperwaveList = Template.bind({});
HyperwaveList.args = {};
HyperwaveList.decorators = [ThemeDecorator(Theme.HYPERWAVE)];

export const HyperwaveGrid = Template.bind({});
HyperwaveGrid.args = {
    view: ArticleView.Grid,
};
HyperwaveGrid.decorators = [ThemeDecorator(Theme.HYPERWAVE)];
