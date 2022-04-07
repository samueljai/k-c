import { render, screen } from '@testing-library/react';
import Star from './Star';

describe('Star', () => {
    it('renders a star image', () => {
        render(<Star />);

        const star = screen.queryAllByAltText('star');
        expect(star.length).toBe(1);
    });
});
