import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useRootStore } from '../../providers/RootStoreProvider';
import { SortFieldType, SortOrderType } from '../../stores/FoodStore';
import Loading from '../Common/Loading/Loading';
import Error from '../Common/Error/Error';
import GlobalLayout from '../Layout/GlobalLayout';
import SubHeader from '../Common/SubHeader/SubHeader';
import SortBy from '../Common/Sort/SortBy';
import { SortButtonType } from '../Common/Sort/SortButton';
import FoodList from './components/FoodList/FoodList';
import './food.scss';

type SortFieldButtonsType = SortButtonType<SortFieldType>[];
type SortOrderButtonsType = SortButtonType<SortOrderType>[];

const Food = () => {
    const {
        foodStore: {
            fetchFoodList,
            isLoading,
            hasError,
            foodList,
            sortField,
            sortOrder,
            sortByField,
            sortByOrder,
        },
    } = useRootStore();

    useEffect(() => {
        !foodList.length && fetchFoodList();
    }, [foodList, fetchFoodList]);

    if (isLoading) {
        return <Loading />;
    }

    if (hasError) {
        return <Error />;
    }

    const handleSortFieldChange = (sortValue: SortFieldType) => {
        sortByField(sortValue);
    };

    const handleSortOrderChange = (sortValue: SortOrderType) => {
        sortByOrder(sortValue);
    };

    const sortFieldButtons: SortFieldButtonsType = [
        {
            text: 'Name',
            currentlySelected: sortField,
            sortValue: 'name',
            onClick: handleSortFieldChange,
        },
        {
            text: 'Origin',
            currentlySelected: sortField,
            sortValue: 'origin',
            onClick: handleSortFieldChange,
        },
        {
            text: 'Rating',
            currentlySelected: sortField,
            sortValue: 'starRating',
            onClick: handleSortFieldChange,
        },
    ];

    const sortOrderButtons: SortOrderButtonsType = [
        {
            text: 'Asc',
            currentlySelected: sortOrder,
            sortValue: 'asc',
            onClick: handleSortOrderChange,
        },
        {
            text: 'Desc',
            currentlySelected: sortOrder,
            sortValue: 'desc',
            onClick: handleSortOrderChange,
        },
    ];

    return (
        <GlobalLayout>
            <article className="food">
                <SubHeader title="Food" />
                <section className="food__content">
                    <div className="food__sortBy">
                        <SortBy<SortFieldType>
                            classname="field"
                            testId="field"
                            sortButtons={sortFieldButtons}
                        />
                        <SortBy<SortOrderType>
                            classname="order"
                            testId="order"
                            sortButtons={sortOrderButtons}
                        />
                    </div>
                    <FoodList foodList={foodList} />
                </section>
            </article>
        </GlobalLayout>
    );
};

export default observer(Food);
