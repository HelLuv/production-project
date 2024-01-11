import { createSelector } from '@reduxjs/toolkit';
import { getAddCommentForm } from './getAddCommentForm';

export const getAddCommentFormError = createSelector(getAddCommentForm, (form) => form?.error);
