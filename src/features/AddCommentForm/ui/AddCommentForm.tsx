import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { PropsWithClassName } from 'shared/types';
import { ReducersList, useDynamicReducers } from 'shared/hooks/useDynamicReducers';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { HStack } from 'shared/ui/Stack';
import { Input } from 'shared/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { getAddCommentFormText } from '../model/selectors/getAddCommentFormText';
import { getAddCommentFormError } from '../model/selectors/getAddCommentFormError';
import { addCommentFormActions, addCommentFormReducer } from '../model/slices/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

type AddCommentFormProps = PropsWithClassName & {
    onSendComment: (text: string)=> Promise<void>;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

export const AddCommentForm = (props: AddCommentFormProps) => {
    useDynamicReducers(reducers);
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const sendComment = useCallback(async () => {
        if (text) {
            await onSendComment(text);

            dispatch(addCommentFormActions.clearForm());
        }
    }, [dispatch, onSendComment, text]);

    return (
        <HStack className={classNames(cls.AddCommentForm, {}, [className])} justify="between" gap={16}>
            <Input
                className={cls.input}
                placeholder="Введите комментарий"
                value={text}
                onChange={onCommentTextChange}
            />

            <Button theme={ButtonTheme.OUTLINE} onClick={sendComment}>
                {t('comments.form.submit')}
            </Button>
        </HStack>
    );
};
