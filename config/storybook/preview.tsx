import type { Preview } from '@storybook/react';
import {
    RouterDecorator, StoreDecorator, StyleDecorator, ThemeDecorator,
} from '../../src/shared/config/storybook';
import { Theme } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator(),
        StoreDecorator({}),
    ],
};

export default preview;
