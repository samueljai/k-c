import { render, screen } from '@testing-library/react';
import Card from './Card';
import { mockFoodListData } from '../../../mocks/foodListDataMock';

describe('Card', () => {
    it('renders an article with the provided children', () => {
        const foodItem = mockFoodListData[0];

        const props = {
            imgSrc: foodItem.image,
            imgAlt: 'foodImage',
        };

        const text = 'Food List Item Card';
        const children = <div>{text}</div>;

        render(<Card {...props}>{children}</Card>);

        const cardItem = screen.getByRole('article');
        expect(cardItem).toHaveTextContent(text);
    });
    it('renders an article with the provided image props', () => {
        const foodItem = mockFoodListData[0];

        const props = {
            imgSrc: foodItem.image,
            imgAlt: 'foodImage',
        };

        const text = 'Food List Item Card';
        const children = <div>{text}</div>;

        render(<Card {...props}>{children}</Card>);

        const image = screen.getByAltText(props.imgAlt);
        expect(image).toBeInTheDocument();
        expect(image.src).toBe(props.imgSrc);
    });
});
