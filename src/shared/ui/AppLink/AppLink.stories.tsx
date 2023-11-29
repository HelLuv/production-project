import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    component: AppLink,
    title: 'shared/AppLink',
    args: {
        to: 'https://google.com',
    },
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    render: () => (
        <AppLink to="https://google.com" theme={AppLinkTheme.PRIMARY} />
    ),
};

export const Secondary: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    render: () => (
        <AppLink to="https://google.com" theme={AppLinkTheme.SECONDARY} />
    ),
};

export const Danger: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    render: () => (
        <AppLink to="https://google.com" theme={AppLinkTheme.DANGER} />
    ),
};
