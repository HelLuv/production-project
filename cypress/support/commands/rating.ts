import { getByTestId } from '../../helpers/getByTestId';

export const setRate = (
    starsCount: number,
    feedback: string = 'New feedback',
) => {
    getByTestId(`StarRating.${starsCount}`).click();
    getByTestId('RatingCard.input').type(feedback);
    getByTestId('Rating Card.send').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(starsCount: number, feedback: string): Chainable<void>;
        }
    }
}
