import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextVariant } from 'shared/ui/Text';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Hyperwave } from 'shared/ui/Code/ui/Code.stories';
import { Card, CardTheme } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: (
            <>
                <Text variant={TextVariant.Title}>Title</Text>
                <Text variant={TextVariant.Text}>Text</Text>
            </>
        ),
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const LightOutlined = Template.bind({});
LightOutlined.args = {
    theme: CardTheme.Outlined,
};
LightOutlined.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkOutlined = Template.bind({});
DarkOutlined.args = {
    theme: CardTheme.Outlined,
};
DarkOutlined.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Hyperwave.args = {};
Hyperwave.decorators = [ThemeDecorator(Theme.HYPERWAVE)];

export const HyperwaveOutlined = Template.bind({});
HyperwaveOutlined.args = {
    theme: CardTheme.Outlined,
};
HyperwaveOutlined.decorators = [ThemeDecorator(Theme.HYPERWAVE)];
