import { makeAutoObservable } from 'mobx';
import FoodStore from './FoodStore';

class RootStore {
    foodStore = null;

    constructor() {
        this.foodStore = new FoodStore();
        makeAutoObservable(this);
    }
}

export default RootStore;
