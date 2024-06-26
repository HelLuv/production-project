import React, { ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { toggleFeatures } from '@/shared/lib/features';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Overlay } from '../Overlay';
import { Portal } from '../Portal';

import classes from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const { theme } = useTheme();
    const { isClosing, isMounted, close } = useModal({
        animationDelay: 170,
        isOpen,
        onClose,
    });

    const mods: Mods = {
        [classes.opened]: isOpen,
        [classes.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                className={classNames(classes.Modal, mods, [
                    className,
                    theme,
                    'app_modal',
                    toggleFeatures({
                        name: 'isSiteRedesigned',
                        on: () => classes.modalNew,
                        off: () => classes.modalOld,
                    }),
                ])}
            >
                <Overlay onClick={close} />
                <div className={classNames(classes.content, {}, [])}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
