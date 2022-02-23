import { render, screen } from '@testing-library/react';
import Stars from './Stars';

describe('Stars', () => {
    describe('renders the correct number of stars', () => {
        it('renders 1 star', () => {
            const numberOfStars = 1;

            render(<Stars numberOfStars={numberOfStars} />);

            const stars = screen.queryAllByAltText('star');
            expect(stars.length).toEqual(numberOfStars);
        });
        it('renders 3 star', () => {
            const numberOfStars = 3;

            render(<Stars numberOfStars={numberOfStars} />);

            const stars = screen.queryAllByAltText('star');
            expect(stars.length).toEqual(numberOfStars);
        });
        it('renders 0 stars', () => {
            const numberOfStars = 0;

            render(<Stars numberOfStars={numberOfStars} />);

            const stars = screen.queryAllByAltText('star');
            expect(stars.length).toEqual(numberOfStars);
        });
    });
});
