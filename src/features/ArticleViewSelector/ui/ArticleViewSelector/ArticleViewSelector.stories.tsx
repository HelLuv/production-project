import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';

export default {
    title: 'features/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => (
    <ArticleViewSelector {...args} />
);

export const List = Template.bind({});
List.args = {
    view: 'LIST',
};

export const Table = Template.bind({});
Table.args = {
    view: 'TABLE',
};
