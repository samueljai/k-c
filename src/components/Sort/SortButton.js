import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import './sortButton.scss';

const SortButton = ({ text, currentlySelected, sortField, onClick }) => {
    const isSelectedButton = sortField === currentlySelected;
    const sortButtonClassname = classNames(
        'sortButton',
        isSelectedButton && 'sortButton--selected'
    );

    const handleClick = () => {
        !isSelectedButton && onClick(sortField);
    };

    return (
        <button
            data-testid={`sortButton-${sortField}`}
            className={sortButtonClassname}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

SortButton.propTypes = {
    text: PropTypes.string,
    currentlySelected: PropTypes.string,
    sortField: PropTypes.string,
    onClick: PropTypes.func,
};

export default observer(SortButton);
