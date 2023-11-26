import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    component: AboutPage,
    title: 'page/AboutPage',
};

export default meta;

type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    render: () => (
        <AboutPage />
    ),
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => (
        <AboutPage />
    ),
};
