import { fireEvent, screen, waitFor } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('with only first param', () => {
        componentRender(<Sidebar />);
        waitFor(
            () => expect((screen.getByTestId('sidebar'))).toBeInTheDocument(),
        );
    });

    test('test closing sidebar on click', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        waitFor(
            () => expect(screen.getByTestId('sidebar')).toBeInTheDocument(),
        );
        fireEvent.click(toggleBtn);

        waitFor(
            () => expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed'),
        );
    });
});
