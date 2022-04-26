import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import Button from '../Button/Button';
import './sortButton.scss';

const SortButton = ({ text, currentlySelected, sortField, onClick }) => {
    const isSelectedButton = sortField === currentlySelected;
    const sortButtonClassname = classNames(
        'sortButton',
        isSelectedButton && 'sortButton--selected',
        !isSelectedButton && 'sortButton--notSelected'
    );

    const handleClick = () => {
        !isSelectedButton && onClick(sortField);
    };

    return (
        <Button
            dataTestId={`sortButton-${sortField}`}
            className={sortButtonClassname}
            buttonText={text}
            onClick={handleClick}
        />
    );
};

SortButton.propTypes = {
    text: PropTypes.string,
    currentlySelected: PropTypes.string,
    sortField: PropTypes.string,
    onClick: PropTypes.func,
};

export default observer(SortButton);
