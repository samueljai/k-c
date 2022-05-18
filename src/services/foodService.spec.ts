import { fetchFood } from './foodService';
import { mockFoodListData } from '../mocks/foodListDataMock';

jest.mock('./foodService');

describe('foodService', () => {
    it('fetchFood function returns mock data if successful', async () => {
        const mockGetFoodListData = fetchFood as jest.MockedFunction<
            typeof fetchFood
        >;

        mockGetFoodListData.mockImplementation(() => {
            return new Promise((resolve): void => {
                resolve(mockFoodListData);
            });
        });

        let foodList;
        await fetchFood().then((data) => (foodList = data));

        expect(foodList).toMatchObject(mockFoodListData);
        expect(mockGetFoodListData).toHaveBeenCalledTimes(1);
    });

    it('fetchFood function returns error message if error', async () => {
        const mockGetFoodListData = fetchFood as jest.MockedFunction<
            typeof fetchFood
        >;

        const errorMessage = 'can not access';
        mockGetFoodListData.mockImplementation(() => {
            return new Promise((resolve, reject): void => {
                reject(errorMessage);
            });
        });

        let error;
        await fetchFood().catch((errorData) => (error = errorData));

        expect(error).toBe(errorMessage);
    });
});
