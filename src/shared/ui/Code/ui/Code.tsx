import { classNames } from 'shared/lib/classNames/classNames';
import { PropsWithChildren, PropsWithClassName } from 'shared/types';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import { useCallback, useRef } from 'react';
import CopyIcon from 'shared/assets/icons/copy.svg';
import cls from './Code.module.scss';

type CodeProps = PropsWithClassName & PropsWithChildren;

export const Code = (props: CodeProps) => {
    const { className, children } = props;
    const codeRef = useRef<HTMLPreElement>(null);

    const onCopy = useCallback(async () => {
        const textContent = codeRef.current?.textContent ?? '';
        await navigator.clipboard.writeText(textContent);
    }, []);

    return (
        <div className={classNames(cls.Code, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.copyButton}
                onClick={onCopy}
                title="Copy code to the clipboard"
            >
                <Icon icon={CopyIcon} />
            </Button>

            <code>
                <pre ref={codeRef}>{children}</pre>
            </code>
        </div>
    );
};
