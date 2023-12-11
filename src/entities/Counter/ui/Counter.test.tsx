import { componentRender } from 'shared/lib/tests';
import { Counter } from 'entities/Counter';
import { fireEvent, screen } from '@testing-library/react';

describe('Counter Component', () => {
    test('should render', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        expect(screen.getByTestId('value')).toBeInTheDocument();
    });

    test('should increase value on increment button click', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        const button = screen.getByTestId('inc-btn');
        fireEvent.click(button);
        expect(screen.getByTestId('value')).toHaveTextContent('11');
    });

    test('should decrease value on decrement button click', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        const button = screen.getByTestId('dec-btn');
        fireEvent.click(button);
        expect(screen.getByTestId('value')).toHaveTextContent('9');
    });
});
