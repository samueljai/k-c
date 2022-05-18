import { render, screen } from '@testing-library/react';
import BeachList from './BeachList';
import { mockBeachListData } from '../../../../mocks/beachListDataMock';

describe('BeachList', () => {
    it('renders the corrct name for a given beach item', () => {
        render(<BeachList beachList={mockBeachListData.beachList} />);

        const beachListItems = screen.queryAllByRole('listitem');
        expect(beachListItems.length).toBe(3);
    });
});
