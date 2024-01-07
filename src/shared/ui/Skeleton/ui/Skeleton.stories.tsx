import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    component: Skeleton,
    title: 'shared/Skeleton',
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    render: () => (
        <Skeleton />
    ),
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => (
        <Skeleton />
    ),
};
