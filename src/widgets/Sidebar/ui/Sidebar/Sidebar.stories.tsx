import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    component: Sidebar,
    title: 'widgets/Sidebar',
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    render: () => (
        <Sidebar />
    ),
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => (
        <Sidebar />
    ),
};
