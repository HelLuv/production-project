import { getByTestId } from '../../helpers/getByTestId';

describe('User visit Articles Page', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login().then(() => {
            cy.visit('/articles');
        });
    });

    it('Articles successfully load', () => {
        getByTestId('ArticlesList').should('exist');
        getByTestId('ArticlesListItem').should('have.length.greaterThan', 3);
    });

    it('Articles successfully load with stubs(fixtures)', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
        getByTestId('ArticlesList').should('exist');
        getByTestId('ArticlesListItem').should('have.length.greaterThan', 3);
    });
});
