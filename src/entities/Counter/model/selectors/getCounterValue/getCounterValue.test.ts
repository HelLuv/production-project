import { DeepPartial } from 'shared/lib/types/DeepPartial';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getCounterValue } from 'entities/Counter/model/selectors';

describe('getCounterValue', () => {
    test('should return counter value as plain number', () => {
        const state: DeepPartial<StateSchema> = { counter: { value: 10 } };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
