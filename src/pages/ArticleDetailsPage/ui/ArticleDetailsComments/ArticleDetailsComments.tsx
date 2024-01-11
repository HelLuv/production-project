import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { VStack } from 'shared/ui/Stack';
import { ID, PropsWithClassName } from 'shared/types';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text, TextVariant } from 'shared/ui/Text';
import { useProjectEffect } from 'shared/hooks/useProjectEffect';
import {
    fetchArticleDetailsComments,
} from 'pages/ArticleDetailsPage/model/services/fetchArticleDetailsComments/fetchArticleDetailsComments';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice';
import {
    getArticleDetailsCommentsIsLoading,
} from '../../model/selectors/getArticleDetailsCommentsIsLoading/getArticleDetailsCommentsIsLoading';

type ArticleDetailsCommentsProps = PropsWithClassName & {
    id: ID;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const { id, className } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

    const sendComment = useCallback(async (text: string) => {
        await dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useProjectEffect(() => {
        dispatch(fetchArticleDetailsComments(id));
    }, [dispatch, id]);

    return (
        <VStack gap={16} className={className}>
            <Text variant={TextVariant.Title}>{t('article-details.comments')}</Text>

            <AddCommentForm onSendComment={sendComment} className="fullwidth" />

            <CommentList isLoading={commentsIsLoading} comments={comments} className="fullwidth" />
        </VStack>
    );
});
