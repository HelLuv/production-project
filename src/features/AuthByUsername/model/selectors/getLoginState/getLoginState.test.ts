import { DeepPartial } from 'shared/lib/types/DeepPartial';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
    test('should return state', () => {
        const loginState = {
            password: 'password',
            username: 'username',
            isLoading: false,
        };
        const state: DeepPartial<StateSchema> = {
            loginForm: loginState,
        };
        expect(getLoginState(state as StateSchema)).toEqual(loginState);
    });

    test('should handle empty state', () => {
        expect(getLoginState({} as StateSchema)).toBeUndefined();
    });
});
