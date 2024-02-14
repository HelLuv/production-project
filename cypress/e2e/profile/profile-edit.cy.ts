import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { getByTestId } from '../../helpers/getByTestId';

let profileId: string;

describe('User go to Profile page', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login().then(() => {
            const data = JSON.parse(
                window.localStorage.getItem(USER_LOCALSTORAGE_KEY) || '{',
            );
            cy.visit(`/profile/${data.id}`);
            profileId = data.id;
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId || '4');
    });

    it('Profile page is successfully loaded', () => {
        getByTestId('ProfileCard.firstname').should('have.value', 'Ivan');
    });

    it('User edit Profile page', () => {
        getByTestId('ProfileCard.firstname').should('have.value', 'Ivan');
        cy.updateProfile('New firstname', 'New lastname');
        getByTestId('ProfileCard.firstname').should(
            'have.value',
            'New firstname',
        );
        getByTestId('ProfileCard.lastname').should(
            'have.value',
            'New lastname',
        );
    });
});
