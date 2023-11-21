import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <h1>{t('Something went wrong!')}</h1>
            <Button onClick={reloadPage} theme={ThemeButton.PRIMARY}>
                {t('Reload page')}
            </Button>
        </div>
    );
};
