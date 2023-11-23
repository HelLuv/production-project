import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('with only first param', () => {
        renderWithTranslation(<Sidebar />);
        waitFor(
            () => expect((screen.getByTestId('sidebar'))).toBeInTheDocument(),
        );
    });

    test('test closing sidebar on click', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        waitFor(
            () => expect((screen.getByTestId('sidebar'))).toHaveClass('collapsed'),
        );
    });
});
