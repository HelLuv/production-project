import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            theme={ThemeButton.PRIMARY}
            className={classNames('', {}, [])}
            onClick={onThrow}
        >
            Throw error
        </Button>
    );
};
