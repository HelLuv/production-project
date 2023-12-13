import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const BugButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            theme={ButtonTheme.PRIMARY}
            className={classNames('', {}, [])}
            onClick={onThrow}
        >
            {t('Throw error')}
        </Button>
    );
};
