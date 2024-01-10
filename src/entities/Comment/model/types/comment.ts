import { ID } from 'shared/types';
import { User } from 'entities/User';

export type Comment = {
    id: ID;
    user: User;
    text: string;
}
