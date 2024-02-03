import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { MainPage } from './MainPage';

const meta: Meta<typeof MainPage> = {
    component: MainPage,
    title: 'page/MainPage',
};

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    render: () => (
        <MainPage />
    ),
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => (
        <MainPage />
    ),
};
