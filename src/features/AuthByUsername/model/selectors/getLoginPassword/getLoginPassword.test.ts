import { DeepPartial } from 'shared/lib/types/DeepPartial';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'password',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toBe('password');
    });

    test('should handle empty state', () => {
        expect(getLoginPassword({} as StateSchema)).toBe('');
    });
});
