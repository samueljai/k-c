import { makeAutoObservable } from 'mobx';
import { fetchFood } from '../services/foodService';
import orderBy from 'lodash.orderby';
import { FoodItemProps } from '../components/Food/components/FoodListItem/FoodListItem';

type FoodListType = FoodItemProps[] | null;
export type SortFieldType = 'name' | 'origin' | 'starRating';
export type SortOrderType = 'asc' | 'desc';

class FoodStore {
    _foodList: FoodListType = null;
    isLoading = false;
    hasError = false;
    sortField: SortFieldType = 'name';
    sortOrder: SortOrderType = 'asc';

    constructor() {
        makeAutoObservable(this);
    }

    fetchFoodList = () => {
        this.isLoading = true;
        fetchFood()
            .then(this.fetchFoodListSuccess)
            .catch(this.fetchFoodListError);
    };

    fetchFoodListSuccess = (foodList: FoodListType) => {
        this._foodList = foodList;
        this.hasError = false;
        this.isLoading = false;
    };

    fetchFoodListError = () => {
        this.hasError = true;
        this.isLoading = false;
    };

    get foodList() {
        const orderedFoodList = orderBy(
            this._foodList,
            this.sortField,
            this.sortOrder
        );

        return orderedFoodList;
    }

    sortByField = (sortField: SortFieldType) => {
        this.sortField = sortField;
    };

    sortByOrder = (sortOrder: SortOrderType) => {
        this.sortOrder = sortOrder;
    };
}

export default FoodStore;
