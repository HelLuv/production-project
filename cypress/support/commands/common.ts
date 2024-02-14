import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localStorage';

export const login = (
    username: string = 'admin',
    password: string = '123',
) => {
    cy.session([username, password], () => {
        cy.request({
            method: 'POST',
            url: 'http://[::1]:8000/login',
            body: {
                username,
                password,
            },
        }).then(({ body }) => {
            window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
        });
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<void>;
        }
    }
}
