import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('Loading', () => {
    it('renders the corrct number of loading dots', () => {
        render(<Loading />);

        const loadingDots = screen.getAllByTestId('loadingSpinner__dots');
        expect(loadingDots).toHaveLength(12);
    });
});
