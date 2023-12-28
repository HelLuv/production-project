import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { ProfilePage } from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    component: ProfilePage,
    title: 'page/ProfilePage',
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    render: () => (
        <ProfilePage />
    ),
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => (
        <ProfilePage />
    ),
};
