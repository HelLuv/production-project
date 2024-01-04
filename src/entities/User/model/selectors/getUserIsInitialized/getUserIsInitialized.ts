import { createSelector } from '@reduxjs/toolkit';
import { getUser } from 'entities/User/model/selectors';

export const getUserIsInitialized = createSelector(getUser, (user) => user?.__initialized__);
