import { render, screen } from '@testing-library/react';
import SubHeader from './SubHeader';

describe('SubHeader', () => {
    it('renders the correct heading based on prop', () => {
        const title = 'Test Heading';

        render(<SubHeader title={title} />);

        const heading = screen.getByRole('heading');
        expect(heading).toHaveTextContent(title);
    });
});
