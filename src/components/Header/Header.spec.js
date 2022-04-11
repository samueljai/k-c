import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    it('renders the correct heading', () => {
        render(<Header />);

        const heading = screen.getByRole('heading');
        expect(heading).toHaveTextContent('World Food');
    });
});
