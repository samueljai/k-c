import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useRootStore } from '../providers/RootStoreProvider';
import Loading from './Common/Loading/Loading';
import Error from './Common/Error/Error';
import FoodList from './FoodList/FoodList';
import Header from './Header/Header';
import SortBy from './Sort/SortBy';
import './food.scss';

const Food = () => {
    const {
        foodStore: { fetchFoodList, isLoading, hasError, foodList },
    } = useRootStore();

    useEffect(() => {
        fetchFoodList();
    }, [fetchFoodList]);

    if (isLoading) {
        return <Loading />;
    }

    if (hasError) {
        return <Error />;
    }

    return (
        <div className="food">
            <Header />
            <SortBy />
            <FoodList foodList={foodList} />
        </div>
    );
};

export default observer(Food);
