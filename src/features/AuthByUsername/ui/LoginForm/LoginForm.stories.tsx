import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/lib/types/DeepPartial';
import { LoginForm } from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof LoginForm>

const state: DeepPartial<StateSchema> = {
    loginForm: {
        username: 'user',
        password: '123',
        isLoading: false,
    },
};

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator(state)],
    render: () => (
        <LoginForm />
    ),
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator(state)],
    render: () => (
        <LoginForm />
    ),
};
