import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { HStack } from 'shared/ui/Stack';
import { PropsWithClassName } from 'shared/types';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';

import { getUserAuthData } from 'entities/User/model/selectors';
import { editableProfileSliceActions } from '../../model/slice/editableProfileCardSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

type ProfilePageHeaderProps = PropsWithClassName;

export const EditableProfileCardHeader = memo((props: ProfilePageHeaderProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const profileReadonly = useSelector(getProfileReadonly);

    const userAuthData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    const isOwnProfile = userAuthData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(editableProfileSliceActions.setReadonly(false));
    }, [dispatch]);

    const onCancel = useCallback(() => {
        dispatch(editableProfileSliceActions.setReadonly(true));
        dispatch(editableProfileSliceActions.resetForm());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack className={className} max justify="between">
            <h1>{t('profile.title')}</h1>

            {isOwnProfile && (
                <HStack gap={8}>
                    {profileReadonly ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                            data-testid="EditableProfileCardHeader.EditButton"
                        >
                            {t('profile.actions.edit')}
                        </Button>
                    ) : (
                        <>
                            {/* todo: add red theme */}
                            <Button
                                theme={ButtonTheme.RED}
                                onClick={onCancel}
                                data-testid="EditableProfileCardHeader.CancelButton"
                            >
                                {t('profile.actions.cancel')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSave}
                                data-testid="EditableProfileCardHeader.SaveButton"
                            >
                                {t('profile.actions.save')}
                            </Button>
                        </>
                    )}
                </HStack>
            )}
        </HStack>
    );
});

EditableProfileCardHeader.displayName = 'EditableProfileCardHeader';
