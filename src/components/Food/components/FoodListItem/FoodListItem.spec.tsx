import { render, screen } from '@testing-library/react';
import FoodListItem from './FoodListItem';
import { mockFoodListData } from '../../../../mocks/foodListDataMock';

describe('FoodListItem', () => {
    it('renders the corrct name for a given food item', () => {
        const foodItem = mockFoodListData[0];

        render(<FoodListItem foodItem={foodItem} />);

        const foodListItemName = screen.getByText(foodItem.name);
        expect(foodListItemName).toBeInTheDocument();
    });

    it('renders the corrct origin for a given food item', () => {
        const foodItem = mockFoodListData[1];

        render(<FoodListItem foodItem={foodItem} />);

        const foodListItemOrigin = screen.getByText(foodItem.origin);
        expect(foodListItemOrigin).toBeInTheDocument();
    });

    it('renders the correct number of stars', () => {
        const foodItem = mockFoodListData[2];

        render(<FoodListItem foodItem={foodItem} />);

        const foodListItemStars = screen.getAllByAltText('star');
        expect(foodListItemStars.length).toBe(foodItem.starRating);
    });
});
