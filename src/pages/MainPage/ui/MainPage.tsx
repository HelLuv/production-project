import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Input } from 'shared/ui/Input';

export const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const onChange = (val: string) => {
        setValue(val);
    };
    return (
        <div>
            {t('Main page')}
            <BugButton />
            <Input value={value} onChange={onChange} placeholder="Enter something" />
        </div>
    );
};
