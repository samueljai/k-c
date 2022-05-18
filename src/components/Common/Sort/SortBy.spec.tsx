import { render, screen, fireEvent } from '@testing-library/react';
import { RootStoreProvider } from '../../../providers/RootStoreProvider';
import { SortFieldType, SortOrderType } from '../../../stores/FoodStore';
import RootStore from '../../../stores/RootStore';
import { SortFieldButtonsType, SortOrderButtonsType } from '../../Food/Food';
import SortBy from './SortBy';

describe('SortBy', () => {
    it('renders a sortBy section with the given testId prop', () => {
        const rootStore = new RootStore();

        const handleSortFieldChange = (sortField: SortFieldType) => {
            rootStore.foodStore.sortByField(sortField);
        };

        const sortFieldButtons: SortFieldButtonsType = [
            {
                text: 'Origin',
                currentlySelected: rootStore.foodStore.sortField,
                sortValue: 'origin',
                onClick: handleSortFieldChange,
            },
        ];

        const sortByProps = {
            classname: 'field',
            testId: 'field',
            sortButtons: sortFieldButtons,
        };

        render(
            <RootStoreProvider rootStore={rootStore}>
                <SortBy {...sortByProps} />
            </RootStoreProvider>
        );

        const sortBy = screen.getByTestId(
            new RegExp(`sortBy__${sortByProps.testId}`, 'i')
        );
        expect(sortBy).toBeInTheDocument();
        expect(sortBy).toHaveClass(`sortBy__${sortByProps.classname}`);
    });

    it('updates the store and selects the field button when clicked', () => {
        const rootStore = new RootStore();

        const handleSortFieldChange = (sortField: SortFieldType) => {
            rootStore.foodStore.sortByField(sortField);
        };

        const sortFieldButtons: SortFieldButtonsType = [
            {
                text: 'Origin',
                currentlySelected: rootStore.foodStore.sortField,
                sortValue: 'origin',
                onClick: handleSortFieldChange,
            },
        ];

        const sortByProps = {
            classname: 'field',
            testId: 'field',
            sortButtons: sortFieldButtons,
        };

        render(
            <RootStoreProvider rootStore={rootStore}>
                <SortBy {...sortByProps} />
            </RootStoreProvider>
        );

        const originButton = screen.getByRole('button', { name: 'Origin' });

        fireEvent.click(originButton);

        expect(rootStore.foodStore.sortField).toBe('origin');
    });

    it('updates the store and selects the order button when clicked', () => {
        const rootStore = new RootStore();

        const handleSortOrderChange = (sortOrder: SortOrderType) => {
            rootStore.foodStore.sortByOrder(sortOrder);
        };

        const sortOrderButtons: SortOrderButtonsType = [
            {
                text: 'Desc',
                currentlySelected: rootStore.foodStore.sortOrder,
                sortValue: 'desc',
                onClick: handleSortOrderChange,
            },
        ];

        const sortByProps = {
            classname: 'field',
            testId: 'field',
            sortButtons: sortOrderButtons,
        };

        render(
            <RootStoreProvider rootStore={rootStore}>
                <SortBy {...sortByProps} />
            </RootStoreProvider>
        );

        const originButton = screen.getByRole('button', { name: 'Desc' });

        fireEvent.click(originButton);

        expect(rootStore.foodStore.sortOrder).toBe('desc');
    });
});
