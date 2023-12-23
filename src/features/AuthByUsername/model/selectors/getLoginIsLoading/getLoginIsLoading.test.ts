import { DeepPartial } from 'shared/lib/types/DeepPartial';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
    test('should return loading as true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toBe(true);
    });

    test('should handle empty state', () => {
        expect(getLoginIsLoading({} as StateSchema)).toBe(false);
    });
});
