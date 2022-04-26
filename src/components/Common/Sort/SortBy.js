import React from 'react';
import SortButton from './SortButton';
import './sortBy.scss';

const SortBy = ({ classname, sortButtons, testId }) => {
    return (
        <section
            className={`sortBy__${classname}`}
            data-testid={`sortBy__${testId}`}
        >
            {sortButtons &&
                sortButtons.map((sortButton, index) => (
                    <SortButton
                        key={index}
                        text={sortButton.text}
                        currentlySelected={sortButton.currentlySelected}
                        sortField={sortButton.sortField}
                        onClick={sortButton.onClick}
                    />
                ))}
        </section>
    );
};

export default SortBy;
