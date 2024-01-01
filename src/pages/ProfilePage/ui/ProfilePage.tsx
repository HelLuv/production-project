import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { ID } from 'shared/types';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';

import { EditableProfileCard } from 'features/EditableProfileCard';

import { Page } from 'widgets/Page';

import styles from './ProfilePage.module.scss';

export const ProfilePage = () => {
    const { id = '1' } = useParams<{ id: ID }>();

    const { t } = useTranslation();

    if (!id) {
        return <Text>{t('profile-page.error')}</Text>;
    }

    return (
        <Page data-testid="profile-page">
            <VStack gap={16} max>
                <EditableProfileCard className={styles.profileCard} id={id} />
            </VStack>
        </Page>
    );
};
