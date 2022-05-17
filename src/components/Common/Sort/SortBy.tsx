import SortButton, { SortButtonType } from './SortButton';
import './sortBy.scss';

type SortByProps<T> = {
    classname: string;
    testId: string;
    sortButtons: SortButtonType<T>[];
};

function SortBy<T>({ classname, testId, sortButtons }: SortByProps<T>) {
    return (
        <section
            className={`sortBy__${classname}`}
            data-testid={`sortBy__${testId}`}
        >
            {sortButtons &&
                sortButtons.map((sortButton, index) => (
                    <SortButton<T> key={index} sortButton={sortButton} />
                ))}
        </section>
    );
}

export default SortBy;
