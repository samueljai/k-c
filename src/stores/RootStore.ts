import { makeAutoObservable } from 'mobx';
import FoodStore from './FoodStore';
import BeachStore from './BeachStore';

class RootStore {
    foodStore: FoodStore;
    beachStore: BeachStore;

    constructor() {
        this.foodStore = new FoodStore();
        this.beachStore = new BeachStore();
        makeAutoObservable(this);
    }
}

export default RootStore;
