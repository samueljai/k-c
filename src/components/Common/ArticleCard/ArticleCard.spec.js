import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import { mockFoodListData } from '../../../mocks/foodListDataMock';

describe('ArticleCard', () => {
    it('renders an article with the provided title prop', () => {
        const foodItem = mockFoodListData[0];

        const props = {
            to: '/food',
            imgSrc: foodItem.image,
            imgAlt: 'foodImage',
            title: 'Food',
        };

        render(
            <BrowserRouter>
                <ArticleCard {...props} />
            </BrowserRouter>
        );

        const cardItem = screen.getByRole('article');
        expect(cardItem).toHaveTextContent(props.title);
    });
    it('renders an article with the provided image props', () => {
        const foodItem = mockFoodListData[0];

        const props = {
            to: '/food',
            imgSrc: foodItem.image,
            imgAlt: 'foodImage',
            title: 'Food',
        };

        render(
            <BrowserRouter>
                <ArticleCard {...props} />
            </BrowserRouter>
        );

        const image = screen.getByAltText(props.imgAlt);
        expect(image).toBeInTheDocument();
        expect(image.src).toBe(props.imgSrc);
    });
    it('renders an article and when clicked it routes to the provided "to" prop', () => {
        const foodItem = mockFoodListData[0];

        const props = {
            to: '/food',
            imgSrc: foodItem.image,
            imgAlt: 'foodImage',
            title: 'Food',
        };

        render(
            <BrowserRouter>
                <ArticleCard {...props} />
            </BrowserRouter>
        );

        expect(window.location.pathname).toBe('/');
        const cardItem = screen.getByText(props.title);
        fireEvent.click(cardItem);
        expect(window.location.pathname).toBe(props.to);
    });
});
