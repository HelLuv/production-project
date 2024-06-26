import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Sidebar } from './Sidebar';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
    <Sidebar {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    }),
];

export const NotAuth = Template.bind({});
NotAuth.args = {};
NotAuth.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
        user: {
            authData: undefined,
        },
    }),
];
