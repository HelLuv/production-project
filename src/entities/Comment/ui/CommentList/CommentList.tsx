import { useTranslation } from 'react-i18next';
import { PropsWithClassName } from 'shared/types';
import { Comment } from 'entities/Comment/model/types/comment';
import { VStack } from 'shared/ui/Stack';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import { Text, TextTheme } from 'shared/ui/Text';

type CommentListProps = PropsWithClassName & {
    comments?: Comment[];
    isLoading: boolean;
    error?: string;
}

export const CommentList = (props: CommentListProps) => {
    const {
        className, comments, error, isLoading,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack gap={12} align="stretch" className={className}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    if (error) {
        return (
            <div className={className}>
                <Text theme={TextTheme.Error}>{error}</Text>
            </div>
        );
    }

    if (!comments?.length) {
        return <div className={className}>{t('comments.list.empty-state')}</div>;
    }

    return (
        <VStack gap={12} align="stretch" className={className}>
            {comments?.map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
            ))}
        </VStack>
    );
};
