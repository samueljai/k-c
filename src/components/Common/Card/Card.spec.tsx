import { render, RenderResult } from '@testing-library/react';
import Card from './Card';
import { mockFoodListData } from '../../../mocks/foodListDataMock';

describe('Card', () => {
    let testingUtils: RenderResult<
        typeof import('@testing-library/dom/types/queries'),
        HTMLElement
    >;
    const foodItem = mockFoodListData[0];
    const props = {
        imgSrc: foodItem.image,
        imgAlt: 'foodImage',
    };
    const text = 'Food List Item Card';
    const children = <div>{text}</div>;

    beforeEach(() => {
        testingUtils = render(<Card {...props}>{children}</Card>);
    });
    afterEach(() => {
        jest.resetAllMocks();
    });

    it('renders an article with the provided children', () => {
        const { getByRole } = testingUtils;
        const cardItem = getByRole('article');
        expect(cardItem).toHaveTextContent(text);
    });
    it('renders an article with the provided image props', () => {
        const { getByAltText } = testingUtils;
        const image = getByAltText(props.imgAlt) as HTMLImageElement;
        expect(image).toBeInTheDocument();
        expect(image.src).toBe(props.imgSrc);
    });
});
