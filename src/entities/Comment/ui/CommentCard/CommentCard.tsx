import { classNames } from 'shared/lib/classNames/classNames';
import { PropsWithClassName } from 'shared/types';
import { HStack, VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton';
import { AppLink } from 'shared/ui/AppLink';
import { AppRoute } from 'app/providers/router';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

type CommentCardProps = PropsWithClassName & {
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = (props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading || !comment) {
        return (
            <VStack gap={12} className={classNames(cls.commentCard, {}, [className])}>
                <HStack gap={12} className={cls.header}>
                    <Skeleton width={30} height={30} borderRadius="50%" />
                    <Skeleton width={100} height={16} />
                </HStack>
                <Skeleton height={50} />
            </VStack>
        );
    }
    const {
        user: { username, avatar, id: userId },
        text,
    } = comment;

    return (
        <VStack gap={12} className={classNames(cls.commentCard, {}, [className])}>
            <AppLink to={AppRoute.Profile(userId)}>
                <HStack>
                    <Avatar size={30} src={avatar} alt={username} />
                    <Text>{username}</Text>
                </HStack>
            </AppLink>

            <Text>{text}</Text>
        </VStack>
    );
};
