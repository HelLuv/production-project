import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
    component: Text,
    title: 'shared/Text',
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    render: () => (
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, placeat.
        </Text>
    ),
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => (
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, placeat.
        </Text>
    ),
};
