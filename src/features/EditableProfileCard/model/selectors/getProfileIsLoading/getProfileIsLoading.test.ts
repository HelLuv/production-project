import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/lib/types/DeepPartial';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
    test('should return profile loading state', () => {
        const state: DeepPartial<StateSchema> = {
            editableProfile: {
                isLoading: false,
            },
        };

        expect(getProfileIsLoading(state as StateSchema)).toBe(false);
    });

    test('should handle empty state profile', () => {
        expect(getProfileIsLoading({} as StateSchema)).toBe(false);
    });
});
