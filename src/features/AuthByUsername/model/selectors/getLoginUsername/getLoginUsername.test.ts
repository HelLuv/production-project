import { DeepPartial } from 'shared/lib/types/DeepPartial';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'username',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toBe('username');
    });

    test('should handle empty state', () => {
        expect(getLoginUsername({} as StateSchema)).toBe('');
    });
});
