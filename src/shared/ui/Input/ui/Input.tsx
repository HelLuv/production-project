import React, {
    InputHTMLAttributes, memo, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>

interface InputProps extends HTMLInputProps {
    className?: string
    onChange?: (value: string) => void;
    value?: string;
    autofocus?: boolean
    type?: string
    placeholder?: string
    readonly?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        onChange,
        value,
        type = 'text',
        placeholder,
        autofocus,
        readonly = false,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef<HTMLInputElement>(null);

    function onBlur() {
        setIsFocused(false);
    }

    function onFocus() {
        setIsFocused(true);
    }

    function onSelect(e: any) {
        setCaretPosition(e?.target?.selectionStart);
    }

    const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        onChange?.(value);
        setCaretPosition(value.length);
    }, [onChange]);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.inputWrapper, mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 13.3}px` }}
                    />
                )}

            </div>

        </div>
    );
});
