import { makeAutoObservable } from 'mobx';
import { fetchFood } from '../services/foodService';
import orderBy from 'lodash.orderby';

class FoodStore {
    _foodList = null;
    isLoading = false;
    hasError = false;
    foodListError = null;
    sortField = 'name';
    sortOrder = 'asc';

    constructor() {
        makeAutoObservable(this);
    }

    fetchFoodList = () => {
        this.isLoading = true;
        fetchFood()
            .then(this.fetchFoodListSuccess)
            .catch(this.fetchFoodListError);
    };

    fetchFoodListSuccess = (foodList) => {
        this._foodList = foodList;
        this.hasError = false;
        this.isLoading = false;
    };

    fetchFoodListError = (error) => {
        this.foodListError = error;
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

    sortByField = (sortField) => {
        this.sortField = sortField;
    };

    sortByOrder = (sortOrder) => {
        this.sortOrder = sortOrder;
    };
}

export default FoodStore;
