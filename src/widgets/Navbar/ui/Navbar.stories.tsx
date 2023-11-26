import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    component: Navbar,
    title: 'widgets/Navbar',
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    render: () => (
        <Navbar />
    ),
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => (
        <Navbar />
    ),
};
