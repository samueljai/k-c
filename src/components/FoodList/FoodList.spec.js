import { render, screen } from '@testing-library/react';
import FoodList from './FoodList';
import { foodListData } from '../../mocks/mockFoodListData';

describe('FoodList', () => {
    it('renders the corrct name for a given food item', () => {
        render(<FoodList foodList={foodListData} />);

        const FoodListItems = screen.queryAllByRole('listitem');
        expect(FoodListItems.length).toBe(3);
    });
});
