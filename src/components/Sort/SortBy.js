import React from 'react';
import { useRootStore } from '../../providers/RootStoreProvider';
import SortButton from './SortButton';
import './sortBy.scss';

const SortBy = () => {
    const {
        foodStore: { sortField, sortOrder, sortByField, sortByOrder },
    } = useRootStore();

    const handleSortFieldChange = (sortField) => {
        sortByField(sortField);
    };

    const handleSortOrderChange = (sortOrder) => {
        sortByOrder(sortOrder);
    };

    return (
        <section className="sortBy" data-testid="sortBy">
            <div className="sortBy__field">
                <SortButton
                    text="Name"
                    currentlySelected={sortField}
                    sortField="name"
                    onClick={handleSortFieldChange}
                />
                <SortButton
                    text="Origin"
                    currentlySelected={sortField}
                    sortField="origin"
                    onClick={handleSortFieldChange}
                />
                <SortButton
                    text="Rating"
                    currentlySelected={sortField}
                    sortField="starRating"
                    onClick={handleSortFieldChange}
                />
            </div>

            <div className="sortBy__order">
                <SortButton
                    text="Asc"
                    currentlySelected={sortOrder}
                    sortField="asc"
                    onClick={handleSortOrderChange}
                />
                <SortButton
                    text="Desc"
                    currentlySelected={sortOrder}
                    sortField="desc"
                    onClick={handleSortOrderChange}
                />
            </div>
        </section>
    );
};

export default SortBy;
