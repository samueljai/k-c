import { render, screen } from '@testing-library/react';
import BeachListItem from './BeachListItem';
import { mockBeachListData } from '../../../../mocks/beachListDataMock';

describe('BeachListItem', () => {
    it('renders the corrct name for a given beach item', () => {
        const beachItem = mockBeachListData.beachList[0];

        render(<BeachListItem beachItem={beachItem} />);

        const beachListItemName = screen.getByText(
            new RegExp(beachItem.name, 'i')
        );
        expect(beachListItemName).toBeInTheDocument();
    });

    it('renders the corrct description for a given beach item', () => {
        const beachItem = mockBeachListData.beachList[1];

        render(<BeachListItem beachItem={beachItem} />);

        const beachListItemOrigin = screen.getByText(beachItem.description);
        expect(beachListItemOrigin).toBeInTheDocument();
    });

    it('renders the correct beach rating before the Name', () => {
        const beachItem = mockBeachListData.beachList[2];

        render(<BeachListItem beachItem={beachItem} />);

        const beachListItemRating = screen.getByText(
            new RegExp(`${beachItem.index}. ${beachItem.name}`, 'i')
        );
        expect(beachListItemRating).toBeInTheDocument();
    });
});
