import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';

import i18n from '../../i18n/i18n';

export const I18nDecorator = (Story: Story) => (
  <I18nextProvider i18n={i18n}>
    <Story />
  </I18nextProvider>
);