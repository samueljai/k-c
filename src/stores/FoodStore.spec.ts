import FoodStore from './FoodStore';
import { waitFor } from '@testing-library/react';
import { mockFoodListData } from '../mocks/foodListDataMock';

// Fake timers using Jest
beforeEach(() => {
    jest.useFakeTimers();
});

// Running all pending timers and switching to real timers using Jest
afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
});

describe('FoodStore', () => {
    it('fetchFoodList function should fetch food list', async () => {
        const foodStore = new FoodStore();

        expect(foodStore._foodList).toBeNull();

        await foodStore.fetchFoodList();
        await waitFor(() => expect(foodStore.isLoading).toBe(false));
        await waitFor(() => expect(foodStore.hasError).toBe(false));

        expect(foodStore._foodList).not.toBeUndefined();
        expect(foodStore._foodList).not.toBeNull();
        expect(foodStore._foodList.length).toBeGreaterThan(0);
    });

    it('get foodList function should return the foodList', async () => {
        const foodStore = new FoodStore();

        foodStore.fetchFoodListSuccess(mockFoodListData);

        const foodList = foodStore.foodList;
        expect(foodList.length).toBeGreaterThan(0);
        expect(foodList.length).toBe(3);
    });

    it('should change sort field', async () => {
        const foodStore = new FoodStore();
        const defaultSortField = 'name';
        const newSortField = 'origin';

        expect(foodStore.sortField).toBe(defaultSortField);

        await foodStore.sortByField(newSortField);

        expect(foodStore.sortField).toBe(newSortField);
    });

    it('should change sort order', async () => {
        const foodStore = new FoodStore();
        const defaultSortOrder = 'asc';
        const newSortOrder = 'desc';

        expect(foodStore.sortOrder).toBe(defaultSortOrder);

        await foodStore.sortByOrder(newSortOrder);

        expect(foodStore.sortOrder).toBe(newSortOrder);
    });
});
