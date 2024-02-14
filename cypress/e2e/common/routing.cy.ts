import { getByTestId } from '../../helpers/getByTestId';

describe('Routing', () => {
    describe('user is authorized', () => {
        beforeEach(() => {
            cy.visit('/');
            cy.login();
        });

        it('Try to open Profile page', () => {
            cy.login();
            cy.visit('/profile/1');
            getByTestId('ProfilePage').should('exist');
        });

        it('Try to open Articles page', () => {
            cy.visit('/articles');
            getByTestId('ArticlesPage').should('exist');
        });
    });

    describe('user is not authorized', () => {
        it('Navigate to Main page', () => {
            cy.visit('/');
            getByTestId('MainPage').should('exist');
        });

        it('Try to open Profile page and redirect to Main page', () => {
            cy.visit('/profile/1');
            getByTestId('MainPage').should('exist');
        });

        it('Try to open not existing page', () => {
            cy.visit('/dhsksb');
            getByTestId('Page404').should('exist');
        });
    });
});
