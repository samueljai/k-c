import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fetchFood, foodDataUrl } from '../services/foodService';
import { mockFoodListData } from '../mocks/foodListDataMock';

const foodListSuccessResponse = rest.get(foodDataUrl, (req, res, ctx) => {
    return res(ctx.json(mockFoodListData));
});

const handlers = [foodListSuccessResponse];

const server = new setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('foodService', () => {
    it('fetchFood function returns mock data if successful', async () => {
        let foodList;
        await fetchFood().then((data) => (foodList = data));

        expect(foodList).toMatchObject(mockFoodListData);
    });

    it('fetchFood function returns error message if error', async () => {
        const errorMessage = 'can not access';

        const foodListErrorResponse = rest.get(foodDataUrl, (req, res, ctx) => {
            return res(
                ctx.status(500),
                ctx.json({
                    errorMessage,
                })
            );
        });

        server.use(foodListErrorResponse);

        let error;
        await fetchFood().then((errorData) => (error = errorData));

        expect(error.errorMessage).toBe(errorMessage);
    });
});
