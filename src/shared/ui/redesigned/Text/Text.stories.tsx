import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Text } from './Text';

export default {
    title: 'shared/redesigned/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Text text text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title',
    text: 'Text text text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text text text',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text text text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Text text text',
    variant: 'error',
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Title',
    text: 'Text text text',
    variant: 'error',
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title',
    text: 'Text text text',
    size: 'size_l',
};

export const SizeLDark = Template.bind({});
SizeLDark.args = {
    title: 'Title',
    text: 'Text text text',
    size: 'size_l',
};
SizeLDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title',
    text: 'Text text text',
    size: 'size_m',
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title',
    text: 'Text text text',
    size: 'size_s',
};
