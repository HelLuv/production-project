import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <form className={classNames(cls.loginForm, {}, [className])}>
            <Input
                type="text"
                className={cls.input}
                placeholder="Username"
                autofocus
            />
            <Input
                type="text"
                className={cls.input}
                placeholder="Password"
            />
            <Button className={cls.loginBtn}>{t('Login')}</Button>
        </form>
    );
};
