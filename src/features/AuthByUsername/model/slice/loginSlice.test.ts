import { DeepPartial } from 'shared/lib/types/DeepPartial';
import { loginByUsername, LoginByUsernameParams } from '../services/loginByUsername';
import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    test('should set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'user',
        };

        expect(loginReducer(state as LoginSchema, loginActions.setUsername('newUser'))).toEqual({
            username: 'newUser',
        });
    });

    test('should set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: 'password',
        };

        expect(loginReducer(state as LoginSchema, loginActions.setPassword('newPassword'))).toEqual({
            password: 'newPassword',
        });
    });

    test('should handle pending login by username', () => {
        const state: DeepPartial<LoginSchema> = {
            isLoading: false,
            error: 'error',
        };

        const action = loginByUsername.pending;

        // @ts-ignore
        expect(loginReducer(state as LoginSchema, action)).toEqual({
            isLoading: true,
        });
    });

    test('should handle fulfilled login by username', () => {
        const state: DeepPartial<LoginSchema> = {
            isLoading: true,
        };

        const action = loginByUsername.fulfilled;

        // @ts-ignore
        expect(loginReducer(state as LoginSchema, action)).toEqual({
            isLoading: false,
        });
    });

    test('should handle rejected login by username', () => {
        const state: DeepPartial<LoginSchema> = {
            isLoading: true,
        };
        const params = {} as LoginByUsernameParams;

        const action = loginByUsername.rejected(null, '', params, 'error');

        expect(loginReducer(state as LoginSchema, action)).toEqual({
            isLoading: false,
            error: 'error',
        });
    });
});
