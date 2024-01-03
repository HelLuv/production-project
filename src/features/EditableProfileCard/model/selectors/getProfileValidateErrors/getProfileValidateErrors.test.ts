import { StateSchema } from 'app/providers/StoreProvider';

import { DeepPartial } from 'shared/lib/types/DeepPartial';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

describe('getProfileValidateErrors', () => {
    test('should return profile validate errors', () => {
        const state: DeepPartial<StateSchema> = {
            editableProfile: {
                validateErrors: [ValidateProfileError.IncorrectAge, ValidateProfileError.IncorrectUserData],
            },
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.IncorrectAge,
            ValidateProfileError.IncorrectUserData,
        ]);
    });

    test('should handle empty state profile', () => {
        expect(getProfileValidateErrors({} as StateSchema)).toBeUndefined();
    });
});
