import BeachStore from './BeachStore';
import { waitFor } from '@testing-library/react';
import { mockBeachListData } from '../mocks/beachListDataMock';

// Fake timers using Jest
beforeEach(() => {
    jest.useFakeTimers();
});

// Running all pending timers and switching to real timers using Jest
afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
});

describe('BeachStore', () => {
    it('fetchBeachList function should fetch beach list', async () => {
        const beachStore = new BeachStore();

        expect(beachStore._beachList).toBeNull();

        await beachStore.fetchBeachList();
        await waitFor(() => expect(beachStore.isLoading).toBe(false));
        await waitFor(() => expect(beachStore.hasError).toBe(false));

        expect(beachStore._beachList).not.toBeUndefined();
        expect(beachStore._beachList).not.toBeNull();
        expect(beachStore._beachList.length).toBeGreaterThan(0);
    });

    it('get beachList function should return the beachList', async () => {
        const beachStore = new BeachStore();

        beachStore.fetchBeachListSuccess(mockBeachListData);

        const beachList = beachStore.beachList;

        expect(beachList.length).toBeGreaterThan(0);
        expect(beachList.length).toBe(3);
    });

    it('should change sort field', async () => {
        const beachStore = new BeachStore();
        const defaultSortField = 'index';
        const newSortField = 'name';

        expect(beachStore.sortField).toBe(defaultSortField);

        await beachStore.sortByField(newSortField);

        expect(beachStore.sortField).toBe(newSortField);
    });

    it('should change sort order', async () => {
        const beachStore = new BeachStore();
        const defaultSortOrder = 'asc';
        const newSortOrder = 'desc';

        expect(beachStore.sortOrder).toBe(defaultSortOrder);

        await beachStore.sortByOrder(newSortOrder);

        expect(beachStore.sortOrder).toBe(newSortOrder);
    });
});
