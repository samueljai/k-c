import { mockBeachListData } from '../mocks/beachListDataMock';
import { fetchBeaches, errorMessage } from './beachService';

jest.mock('./beachService');

describe('beachService', () => {
    it('fetchBeaches function returns mock data if successful', async () => {
        const mockGetBeachListData = fetchBeaches as jest.MockedFunction<
            typeof fetchBeaches
        >;

        mockGetBeachListData.mockImplementation(() => {
            return new Promise((resolve): void => {
                resolve(mockBeachListData.beachList);
            });
        });

        let beachList;
        await fetchBeaches().then((data) => (beachList = data));

        expect(beachList).toMatchObject(mockBeachListData.beachList);
        expect(mockGetBeachListData).toHaveBeenCalledTimes(1);
    });

    it('fetchBeaches function returns error message if error', async () => {
        const mockGetBeachListData = fetchBeaches as jest.MockedFunction<
            typeof fetchBeaches
        >;

        mockGetBeachListData.mockImplementation(() => {
            return new Promise((resolve, reject): void => {
                reject(errorMessage);
            });
        });

        await expect(fetchBeaches()).rejects.toEqual(errorMessage);
        expect(mockGetBeachListData).toHaveBeenCalledTimes(1);
    });
});
