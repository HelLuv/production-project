import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string
  short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    async function toggleLang() {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleLang}
            className={classNames('', {}, [className])}
        >
            {t(short ? 'Short Lang' : 'Language')}
        </Button>
    );
};
