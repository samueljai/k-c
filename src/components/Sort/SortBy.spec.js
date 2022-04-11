import { render, screen, fireEvent } from '@testing-library/react';
import { RootStoreProvider } from '../../providers/RootStoreProvider';
import RootStore from '../../stores/RootStore';
import SortBy from './SortBy';

describe('SortBy', () => {
    it('renders 5 sort buttons', () => {
        const rootStore = new RootStore();

        render(
            <RootStoreProvider rootStore={rootStore}>
                <SortBy />
            </RootStoreProvider>
        );

        const sortButtons = screen.getAllByTestId(/sortButton/i);
        expect(sortButtons.length).toBe(5);
    });

    it('updates the store and selects the field button when clicked', () => {
        const rootStore = new RootStore();

        render(
            <RootStoreProvider rootStore={rootStore}>
                <SortBy />
            </RootStoreProvider>
        );

        const originButton = screen.getByRole('button', { name: 'Origin' });

        fireEvent.click(originButton);

        expect(rootStore.foodStore.sortField).toBe('origin');
    });

    it('updates the store and selects the order button when clicked', () => {
        const rootStore = new RootStore();

        render(
            <RootStoreProvider rootStore={rootStore}>
                <SortBy />
            </RootStoreProvider>
        );

        const originButton = screen.getByRole('button', { name: 'Desc' });

        fireEvent.click(originButton);

        expect(rootStore.foodStore.sortOrder).toBe('desc');
    });
});
