import { render, screen } from '@testing-library/react';
import FoodList from './FoodList';
import { mockFoodListData } from '../../../../mocks/foodListDataMock';

describe('FoodList', () => {
    it('renders the corrct name for a given food item', () => {
        render(<FoodList foodList={mockFoodListData} />);

        const FoodListItems = screen.queryAllByRole('listitem');
        expect(FoodListItems.length).toBe(3);
    });
});
