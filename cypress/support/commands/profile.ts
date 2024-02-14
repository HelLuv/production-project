import { getByTestId } from '../../helpers/getByTestId';

export const updateProfile = (
    firstname: string = 'New Firstname',
    lastname: string = 'New Lastname',
) => {
    getByTestId('EditableProfileCardHeader.EditButton').click();
    getByTestId('ProfileCard.firstname').clear().type(firstname);
    getByTestId('ProfileCard.lastname').clear().type(lastname);
    getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    cy.origin(
        'http://localhost:8000/profile',
        { args: { profileId } },
        ({ profileId }) => [
            cy.request({
                method: 'PUT',
                url: `http://localhost:8000/profile/${profileId}`,
                headers: {
                    Authorization: 'testuser',
                },
                body: {
                    id: '4',
                    first: 'Ivan',
                    lastname: 'Tester',
                    birthYear: 1992,
                    currency: 'RUB',
                    country: 'Russia',
                    city: 'Moscow',
                    username: 'testuser',
                    avatar: '',
                },
            }),
        ],
    );
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;

            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
