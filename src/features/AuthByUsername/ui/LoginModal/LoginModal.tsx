import { classNames } from 'shared/lib/classNames/classNames';
import { Modal, ModalProps } from 'shared/ui/Modal';
import { PropsWithClassName } from 'shared/types';
import { LoginFormProps } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';

type LoginModalProps = PropsWithClassName & Pick<ModalProps, 'isOpen'| 'onClose'> & Pick<LoginFormProps, 'onSuccess'>

export const LoginModal = (props: LoginModalProps) => {
    const { className, onClose, isOpen } = props;

    return (
        <Modal
            className={classNames(cls.loginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={(
                <div className={cls.loaderWrapper}>
                    <Loader />
                </div>
            )}
            >
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
