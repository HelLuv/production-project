import { createSelector } from '@reduxjs/toolkit';
import { getAddCommentForm } from './getAddCommentForm';

export const getAddCommentFormText = createSelector(getAddCommentForm, (form) => form?.text);
