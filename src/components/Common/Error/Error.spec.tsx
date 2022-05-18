import { render, screen } from '@testing-library/react';
import Error from './Error';

describe('Error', () => {
    it('renders an error heading', () => {
        render(<Error />);

        const heading = screen.getByRole('heading');
        expect(heading).toHaveTextContent('...ERROR');
    });
});
