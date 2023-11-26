import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'shared/Button',
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    render: () => (
        <Button
            theme={ThemeButton.PRIMARY}
            label="Button"
        />
    ),
};

export const Clear: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    render: () => (
        <Button
            theme={ThemeButton.CLEAR}
            label="Button"
        />
    ),
};

export const Outline: Story = {
    render: () => (
        <Button
            theme={ThemeButton.OUTLINE}
            label="Button"
        />
    ),
};

export const OutlineDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => (
        <Button
            theme={ThemeButton.OUTLINE}
            label="Button"
        />
    ),
};
