import { observer } from 'mobx-react';
import classNames from 'classnames';
import Button from '../Button/Button';
import './sortButton.scss';

export type SortButtonProps = {
    text: string;
    currentlySelected: string;
    sortField: string;
    onClick: (x: string) => void;
};

const SortButton = ({
    text,
    currentlySelected,
    sortField,
    onClick,
}: SortButtonProps) => {
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

export default observer(SortButton);
