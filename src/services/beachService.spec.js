import { getBeachListData } from '../data/beachData';
import { mockBeachListData } from '../mocks/beachListDataMock';
import { fetchBeaches, errorMessage } from './beachService';

jest.mock('../data/beachData');

describe('beachService', () => {
    it('fetchBeaches function returns mock data if successful', async () => {
        getBeachListData.mockImplementation(() => mockBeachListData);

        await expect(fetchBeaches()).resolves.toMatchObject(mockBeachListData);
        expect(getBeachListData).toHaveBeenCalledTimes(1);
    });

    it('fetchBeaches function returns error message if error', async () => {
        getBeachListData.mockImplementation(() => null);

        await expect(fetchBeaches()).rejects.toEqual(errorMessage);
        expect(getBeachListData).toHaveBeenCalledTimes(1);
    });
});
