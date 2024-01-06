import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticlesPage } from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
    component: ArticlesPage,
    title: 'shared/ArticlesPage',
};

export default meta;

type Story = StoryObj<typeof ArticlesPage>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    render: () => (
        <ArticlesPage />
    ),
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => (
        <ArticlesPage />
    ),
};
