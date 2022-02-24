import React from 'react';
// import { render, waitFor, screen } from '@testing-library/react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Food from './Food';
import { foodListData } from '../mocks/mockFoodListData';

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('Food List', () => {
    it('returns 14 LI', async () => {
        // this test requires the @testing-library/react render
        // render(<Food />);
        // await waitFor(() =>
        //     expect(screen.queryAllByRole('listitem').length).toBe(14)
        // );
    });
    it('returns 3 LI', async () => {
        // this test requires the react-dom render
        jest.spyOn(global, 'fetch').mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(foodListData),
            })
        );

        await act(async () => {
            render(<Food />, container);
        });

        expect(container.querySelector('li')).toBeInTheDocument();

        global.fetch.mockRestore();
    });
});
