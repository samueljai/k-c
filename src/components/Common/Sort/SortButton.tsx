import { observer } from 'mobx-react';
import classNames from 'classnames';
import Button from '../Button/Button';
import './sortButton.scss';

export type SortButtonType<T> = {
    text: string;
    currentlySelected: T;
    sortValue: T;
    onClick: (sortValue: T) => void;
};

type SortButtonProps<T> = {
    sortButton: SortButtonType<T>;
};

function SortButton<T>({ sortButton }: SortButtonProps<T>) {
    const { currentlySelected, text, sortValue, onClick } = sortButton;

    const isSelectedButton = sortValue === currentlySelected;
    const sortButtonClassname = classNames(
        'sortButton',
        isSelectedButton && 'sortButton--selected',
        !isSelectedButton && 'sortButton--notSelected'
    );

    const handleClick = () => {
        !isSelectedButton && onClick(sortValue);
    };

    return (
        <Button
            dataTestId={`sortButton-${sortValue}`}
            className={sortButtonClassname}
            buttonText={text}
            onClick={handleClick}
        />
    );
}

export default observer(SortButton);
