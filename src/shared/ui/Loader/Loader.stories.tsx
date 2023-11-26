import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
    component: Loader,
    title: 'shared/Loader',
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    render: () => (
        <Loader />
    ),
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => (
        <Loader />
    ),
};
