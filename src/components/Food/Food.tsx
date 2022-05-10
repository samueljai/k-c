import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useRootStore } from '../../providers/RootStoreProvider';
import Loading from '../Common/Loading/Loading';
import Error from '../Common/Error/Error';
import GlobalLayout from '../Layout/GlobalLayout';
import SubHeader from '../Common/SubHeader/SubHeader';
import SortBy from '../Common/Sort/SortBy';
import FoodList from './components/FoodList/FoodList';
import './food.scss';

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

    const handleSortFieldChange = (sortField: string) => {
        sortByField(sortField);
    };

    const handleSortOrderChange = (sortOrder: string) => {
        sortByOrder(sortOrder);
    };

    const sortFieldButtons = [
        {
            text: 'Name',
            currentlySelected: sortField,
            sortField: 'name',
            onClick: handleSortFieldChange,
        },
        {
            text: 'Origin',
            currentlySelected: sortField,
            sortField: 'origin',
            onClick: handleSortFieldChange,
        },
        {
            text: 'Rating',
            currentlySelected: sortField,
            sortField: 'starRating',
            onClick: handleSortFieldChange,
        },
    ];

    const sortOrderButtons = [
        {
            text: 'Asc',
            currentlySelected: sortOrder,
            sortField: 'asc',
            onClick: handleSortOrderChange,
        },
        {
            text: 'Desc',
            currentlySelected: sortOrder,
            sortField: 'desc',
            onClick: handleSortOrderChange,
        },
    ];

    return (
        <GlobalLayout>
            <article className="food">
                <SubHeader title="Food" />
                <section className="food__content">
                    <div className="food__sortBy">
                        <SortBy
                            classname="field"
                            testId="field"
                            sortButtons={sortFieldButtons}
                        />
                        <SortBy
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
