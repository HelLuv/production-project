import { getByTestId } from '../../helpers/getByTestId';

export const addNewComment = (text: string) => {
    getByTestId('AddNewCommentForm.input').type(text);
    getByTestId('AddNewCommentForm.button').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            addNewComment(text: string): Chainable<void>;
        }
    }
}
