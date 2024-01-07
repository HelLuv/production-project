import { DeepPartial } from 'shared/lib/types/DeepPartial';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'Error',
            },
        };
        expect(getLoginError(state as StateSchema)).toBe('Error');
    });

    test('should handle empty state', () => {
        expect(getLoginError({} as StateSchema)).toBe('');
    });
});