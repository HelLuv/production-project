import { TestAsyncThunk } from 'shared/lib/tests';
import { userActions } from 'entities/User';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername', () => {
    test('should handle success request', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);

        const { api, dispatch } = thunk;

        Storage.prototype.setItem = jest.fn();

        const authData = {
            id: 'id',
            username: 'user',
            roles: [],
        };

        api.post.mockReturnValue(
            Promise.resolve({
                data: authData,
            }),
        );

        const result = await thunk.callThunk({
            username: 'user',
            password: '123',
        });

        expect(result.meta.requestStatus).toBe('fulfilled');

        expect(api.post).toHaveBeenCalled();

        expect(dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(authData),
        );

        expect(Storage.prototype.setItem).toHaveBeenCalledTimes(1);
        expect(Storage.prototype.setItem).toHaveBeenCalledWith('user', JSON.stringify(authData));

        expect(dispatch).toHaveBeenCalledTimes(3);
    });

    test('should handle error request', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);

        const { api, dispatch } = thunk;

        Storage.prototype.setItem = jest.fn();

        api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk({
            username: 'user',
            password: '123',
        });

        expect(api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');

        expect(Storage.prototype.setItem).not.toHaveBeenCalled();

        expect(dispatch).toHaveBeenCalledTimes(2);
    });
});
