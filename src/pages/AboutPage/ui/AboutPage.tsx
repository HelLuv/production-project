import React, { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

export const AboutPage: FC = memo(() => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('About page')}
        </div>
    );
});
