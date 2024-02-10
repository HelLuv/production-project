import { Suspense } from 'react';

import { Story } from '@storybook/react';

import { PageLoader } from '@/widgets/PageLoader';

export const SuspenseDecorator = (Story: Story) => (
    <Suspense fallback={<PageLoader />}>
        <Story />
    </Suspense>
);
