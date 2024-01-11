import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StateSchema } from 'app/providers/StoreProvider';

import { DeepPartial } from 'shared/lib/types/DeepPartial';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { AddCommentForm } from './AddCommentForm';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

const state: DeepPartial<StateSchema> = {
    addCommentForm: {
        text: 'comment',
    },
};

const errorState: DeepPartial<StateSchema> = {
    addCommentForm: {
        text: 'comment',
        error: 'error',
    },
};

export const Normal = Template.bind({});
Normal.decorators = [StoreDecorator(state)];

export const Error = Template.bind({});
Error.decorators = [StoreDecorator(errorState)];

export const NormalDark = Template.bind({});
NormalDark.decorators = [StoreDecorator(state), ThemeDecorator(Theme.DARK)];

export const ErrorDark = Template.bind({});
ErrorDark.decorators = [StoreDecorator(errorState), ThemeDecorator(Theme.DARK)];

export const NormalHyperwave = Template.bind({});
NormalHyperwave.decorators = [StoreDecorator(state), ThemeDecorator(Theme.HYPERWAVE)];

export const ErrorLight = Template.bind({});
ErrorLight.decorators = [StoreDecorator(errorState), ThemeDecorator(Theme.LIGHT)];
