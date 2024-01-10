import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { ID } from 'shared/types';

export type ArticleDetailsCommentsSchema = EntityState<Comment, ID> & {
    isLoading: boolean;
    error?: string;
}
