import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleDetailsPage } from './ArticleDetailsPage';

const meta: Meta<typeof ArticleDetailsPage> = {
    component: ArticleDetailsPage,
    title: 'shared/ArticleDetailsPage',
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsPage>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    render: () => (
        <ArticleDetailsPage />
    ),
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => (
        <ArticleDetailsPage />
    ),
};
