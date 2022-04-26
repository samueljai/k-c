import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    it('renders the correct heading based on prop', () => {
        const title = 'Test Heading';

        render(<Header title={title} />);

        const heading = screen.getByRole('heading');
        expect(heading).toHaveTextContent(title);
    });
});
