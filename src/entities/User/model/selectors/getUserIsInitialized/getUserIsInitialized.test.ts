import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/lib/types/DeepPartial';
import { getUserIsInitialized } from './getUserIsInitialized';

describe('getUserIsInitialized', () => {
    test('should return user initialized true', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                __initialized__: true,
            },
        };

        expect(getUserIsInitialized(state as StateSchema)).toBe(true);
    });
});
