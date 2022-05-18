import { render, fireEvent, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import { mockFoodListData } from '../../../mocks/foodListDataMock';

describe('ArticleCard', () => {
    let testingUtils: RenderResult<
        typeof import('@testing-library/dom/types/queries'),
        HTMLElement
    >;
    const foodItem = mockFoodListData[0];
    const props = {
        to: '/food',
        imgSrc: foodItem.image,
        imgAlt: 'foodImage',
        title: 'Food',
    };

    beforeEach(() => {
        testingUtils = render(
            <BrowserRouter>
                <ArticleCard {...props} />
            </BrowserRouter>
        );
    });
    afterEach(() => {
        jest.resetAllMocks();
    });

    it('renders an article with the provided title prop', () => {
        const { getByRole } = testingUtils;
        const cardItem = getByRole('article');
        expect(cardItem).toHaveTextContent(props.title);
    });
    it('renders an article with the provided image props', () => {
        const { getByAltText } = testingUtils;
        const image = getByAltText(props.imgAlt) as HTMLImageElement;
        expect(image).toBeInTheDocument();
        expect(image.src).toBe(props.imgSrc);
    });
    it('renders an article and when clicked it routes to the provided "to" prop', () => {
        const { getByText } = testingUtils;
        expect(window.location.pathname).toBe('/');
        const cardItem = getByText(props.title);
        fireEvent.click(cardItem);
        expect(window.location.pathname).toBe(props.to);
    });
});
