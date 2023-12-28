import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import {
    getLoginError,
    getLoginIsLoading,
    getLoginPassword,
    getLoginUsername,
} from 'features/AuthByUsername/model/selectors';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername';
import { Text } from 'shared/ui/Text';
import { TextTheme, TextVariant } from 'shared/ui/Text/ui/Text';
import { PropsWithClassName } from 'shared/types';
import { useDynamicReducers } from 'shared/hooks/useDynamicReducers';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import cls from './LoginForm.module.scss';

const dynamicReducers = {
    loginForm: loginReducer,
};

export type LoginFormProps = PropsWithClassName & {
    onSuccess?: () => void;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const { className, onSuccess, ...otherProps } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    useDynamicReducers(dynamicReducers);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onFormSubmit = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess?.();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <form className={classNames(cls.loginForm, {}, [className])} {...otherProps}>
            {error && (
                <Text
                    variant={TextVariant.Text}
                    theme={TextTheme.Error}
                >
                    {error}
                </Text>
            )}
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder="Username"
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder="Password"
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
                disabled={isLoading}
                onClick={onFormSubmit}
            >
                {t('Login')}
            </Button>
        </form>
    );
});
