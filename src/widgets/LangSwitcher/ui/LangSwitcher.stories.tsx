import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { LangSwitcher } from './LangSwitcher';

const meta: Meta<typeof LangSwitcher> = {
    component: LangSwitcher,
    title: 'widgets/LangSwitcher',
};

export default meta;

type Story = StoryObj<typeof LangSwitcher>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    render: () => (
        <LangSwitcher />
    ),
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => (
        <LangSwitcher />
    ),
};
