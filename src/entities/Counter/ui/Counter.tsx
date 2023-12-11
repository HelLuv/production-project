import { Button } from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    const counterValue = useSelector(getCounterValue);

    return (
        <div>
            <h1>
                value —
                {' '}
                <span data-testid="value">{counterValue}</span>
            </h1>
            <Button data-testid="inc-btn" onClick={increment}>Increment</Button>
            <Button data-testid="dec-btn" onClick={decrement}>Decrement</Button>
        </div>
    );
};
