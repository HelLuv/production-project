import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { PageLoader } from './PageLoader';

const meta: Meta<typeof PageLoader> = {
    component: PageLoader,
    title: 'widgets/PageLoader',
};

export default meta;

type Story = StoryObj<typeof PageLoader>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    render: () => (
        <PageLoader />
    ),
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => (
        <PageLoader />
    ),
};
