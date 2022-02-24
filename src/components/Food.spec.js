import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import Food from './Food';
import { foodListData } from '../mocks/mockFoodListData';

// jest.mock('../api/food', () => {
//     return {
//         fetchFood: jest.fn().mockImplementation(() => {
//             return Promise.resolve(foodListData);
//         }),
//     };
// });

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(foodListData),
    })
);

describe('Food List', () => {
    // it('returns 14 LI', async () => {
    //     render(<Food />);
    //     await waitFor(() =>
    //         expect(screen.queryAllByRole('listitem').length).toBe(14)
    //     );
    // });
    it('returns 3 LI', async () => {
        render(<Food />);

        await waitFor(() =>
            expect(screen.queryAllByRole('listitem').length).toBe(
                foodListData.length
            )
        );
    });
});
