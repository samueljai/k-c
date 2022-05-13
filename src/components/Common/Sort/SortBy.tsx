import SortButton, { SortButtonProps } from './SortButton';
import './sortBy.scss';

type SortByProps = {
    classname: string;
    sortButtons: SortButtonProps[];
    testId: string;
};

const SortBy = ({ classname, sortButtons, testId }: SortByProps) => {
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
